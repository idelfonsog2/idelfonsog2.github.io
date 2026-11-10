<template>
  <div class="qa-root">
    <v-btn
      v-if="!open"
      ref="launcher"
      class="qa-launcher"
      color="primary"
      variant="flat"
      size="large"
      prepend-icon="mdi-chat-processing-outline"
      aria-haspopup="dialog"
      aria-controls="qa-panel"
      :aria-expanded="false"
      :aria-label="c.chat.launcher"
      @click="openPanel"
    >
      {{ c.chat.launcherLabel }}
    </v-btn>

    <Transition name="qa">
      <section
        v-if="open"
        id="qa-panel"
        class="qa-panel"
        role="dialog"
        aria-labelledby="qa-title"
      >
        <header class="qa-header">
          <v-avatar size="40" class="flex-shrink-0">
            <v-img :src="media.avatar" alt="" />
          </v-avatar>
          <div class="qa-heading">
            <h2 id="qa-title" ref="title" tabindex="-1" class="qa-title">{{ c.chat.title }}</h2>
            <p class="qa-sub">{{ c.chat.subtitle }}</p>
          </div>
          <v-btn icon variant="text" size="large" :aria-label="c.chat.close" @click="closePanel">
            <v-icon icon="mdi-close" />
          </v-btn>
        </header>

        <!-- New messages are announced to screen readers -->
        <div ref="scroller" class="qa-body" role="log" tabindex="-1" aria-live="polite" aria-relevant="additions">
          <div v-for="(m, i) in messages" :key="i" class="qa-row" :class="`qa-row--${m.role}`">
            <div class="qa-bubble" :class="`qa-bubble--${m.role}`">
              <p>{{ textOf(m) }}</p>
              <div v-if="m.contact" class="qa-actions">
                <v-btn
                  :href="`mailto:${links.email}`"
                  color="primary"
                  variant="flat"
                  size="large"
                  prepend-icon="mdi-email-outline"
                >
                  {{ c.chat.email }}
                </v-btn>
                <v-btn
                  :href="links.linkedin"
                  target="_blank"
                  rel="noopener"
                  variant="outlined"
                  size="large"
                  prepend-icon="mdi-linkedin"
                >
                  {{ c.chat.linkedin }}
                </v-btn>
              </div>
            </div>
          </div>

          <!-- Typing pause (decorative; the answer itself is announced via the log) -->
          <div v-if="pending" class="qa-row qa-row--me" aria-hidden="true">
            <div class="qa-bubble qa-bubble--me qa-typing"><span /><span /><span /></div>
          </div>

          <div v-if="!pending && suggestions.length" class="qa-suggestions">
            <p class="qa-prompt">{{ c.chat.prompt }}</p>
            <button v-for="item in suggestions" :key="item.id" type="button" class="qa-suggestion" @click="ask(item)">
              {{ item.question }}
            </button>
          </div>
        </div>

        <footer class="qa-footer">
          <v-btn variant="text" size="large" class="text-none" prepend-icon="mdi-restart" @click="restart">
            {{ c.chat.restart }}
          </v-btn>
        </footer>
      </section>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { links, media } from '../content'
import { useContent } from '../i18n'

type Item = { id: string; question: string; answer: string; contact?: boolean }
type Message = { role: 'me' | 'visitor'; id: string; contact?: boolean }

const MAX_SUGGESTIONS = 5

const c = useContent()
const open = ref(false)
const pending = ref(false)
const messages = ref<Message[]>([{ role: 'me', id: 'greeting' }])
const asked = ref<Set<string>>(new Set())

const launcher = ref<{ $el: HTMLElement } | null>(null)
const title = ref<HTMLElement | null>(null)
const scroller = ref<HTMLElement | null>(null)
let timer: number | undefined

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Messages store ids, not text, so the conversation re-renders when the language changes
function textOf(m: Message): string {
  if (m.id === 'greeting') return c.value.chat.greeting
  if (m.id === 'allDone') return c.value.chat.allDone
  const item = c.value.chat.items.find((i) => i.id === m.id)
  if (!item) return ''
  return m.role === 'visitor' ? item.question : item.answer
}

const suggestions = computed(() =>
  c.value.chat.items.filter((i) => !asked.value.has(i.id)).slice(0, MAX_SUGGESTIONS),
)

async function scrollToEnd() {
  await nextTick()
  scroller.value?.scrollTo({ top: scroller.value.scrollHeight, behavior: reducedMotion() ? 'auto' : 'smooth' })
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closePanel()
}

// Listen for Escape anywhere on the page, but only while the panel is open
watch(open, (isOpen) => {
  if (isOpen) document.addEventListener('keydown', onKeydown)
  else document.removeEventListener('keydown', onKeydown)
})

async function openPanel() {
  open.value = true
  await nextTick()
  title.value?.focus()
}

async function closePanel() {
  open.value = false
  await nextTick()
  launcher.value?.$el?.focus()
}

function ask(item: Item) {
  if (pending.value) return
  // The clicked suggestion is about to be removed from the page; keep keyboard focus inside the
  // panel (on the message log) so Tab order and Escape keep working
  scroller.value?.focus()
  asked.value = new Set(asked.value).add(item.id)
  messages.value.push({ role: 'visitor', id: item.id })
  pending.value = true
  scrollToEnd()
  timer = window.setTimeout(
    () => {
      pending.value = false
      messages.value.push({ role: 'me', id: item.id, contact: item.contact })
      if (c.value.chat.items.every((i) => asked.value.has(i.id))) {
        messages.value.push({ role: 'me', id: 'allDone', contact: true })
      }
      scrollToEnd()
    },
    reducedMotion() ? 0 : 700,
  )
}

function restart() {
  window.clearTimeout(timer)
  pending.value = false
  asked.value = new Set()
  messages.value = [{ role: 'me', id: 'greeting' }]
  scrollToEnd()
}

onBeforeUnmount(() => {
  window.clearTimeout(timer)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.qa-launcher {
  position: fixed;
  right: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom));
  z-index: 1500;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.qa-panel {
  position: fixed;
  right: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom));
  z-index: 1600;
  display: flex;
  flex-direction: column;
  width: 380px;
  max-width: calc(100vw - 32px);
  height: min(620px, calc(100dvh - 32px));
  overflow: hidden;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 16px;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
}

/* Phones: take the whole screen */
@media (max-width: 599px) {
  .qa-panel {
    inset: 0;
    width: auto;
    max-width: none;
    height: auto;
    border: 0;
    border-radius: 0;
  }
}

.qa-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 8px 12px 16px;
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
.qa-heading {
  flex: 1;
  min-width: 0;
}
.qa-title {
  font-size: 1.1rem;
  line-height: 1.3;
  outline: none;
}
.qa-sub {
  font-size: 0.8rem;
  line-height: 1.3;
  color: rgba(var(--v-theme-on-surface), 0.7);
}

.qa-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  outline: none; /* focused programmatically, not a tab stop */
}
.qa-row {
  display: flex;
  margin-bottom: 12px;
}
.qa-row--visitor {
  justify-content: flex-end;
}
.qa-bubble {
  max-width: 88%;
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 0.95rem;
  line-height: 1.5;
}
.qa-bubble--me {
  border-bottom-left-radius: 4px;
  background: rgba(var(--v-theme-on-surface), 0.08);
}
.qa-bubble--visitor {
  border-bottom-right-radius: 4px;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
}
.qa-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.qa-typing {
  display: flex;
  gap: 4px;
  padding: 14px;
}
.qa-typing span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(var(--v-theme-on-surface), 0.55);
  animation: qa-bounce 1s infinite ease-in-out;
}
.qa-typing span:nth-child(2) {
  animation-delay: 0.15s;
}
.qa-typing span:nth-child(3) {
  animation-delay: 0.3s;
}
@keyframes qa-bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  40% {
    transform: translateY(-4px);
    opacity: 1;
  }
}

.qa-suggestions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 4px;
}
.qa-prompt {
  font-size: 0.8rem;
  color: rgba(var(--v-theme-on-surface), 0.7);
}
.qa-suggestion {
  min-height: 44px;
  padding: 8px 16px;
  border: 1px solid rgb(var(--v-theme-primary));
  border-radius: 22px;
  background: transparent;
  color: rgb(var(--v-theme-primary));
  font: inherit;
  font-size: 0.9rem;
  line-height: 1.35;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;
}
.qa-suggestion:hover,
.qa-suggestion:focus-visible {
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
}
.qa-suggestion:focus-visible {
  outline: 2px solid rgb(var(--v-theme-secondary));
  outline-offset: 2px;
}

.qa-footer {
  display: flex;
  justify-content: flex-end;
  padding: 4px 8px;
  border-top: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.qa-enter-active,
.qa-leave-active {
  transition: opacity 0.18s, transform 0.18s;
}
.qa-enter-from,
.qa-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (prefers-reduced-motion: reduce) {
  .qa-enter-active,
  .qa-leave-active,
  .qa-suggestion {
    transition: none;
  }
  .qa-typing span {
    animation: none;
  }
}

@media print {
  .qa-root {
    display: none;
  }
}
</style>
