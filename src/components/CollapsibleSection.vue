<template>
  <section :id="id" class="collapsible" :class="{ 'is-collapsed': !open }" :aria-labelledby="`${id}-title`">
    <!-- WAI-ARIA accordion pattern: the heading contains the button that toggles the panel -->
    <h2 :id="`${id}-title`" class="collapsible-heading">
      <button
        type="button"
        class="collapsible-trigger"
        :aria-expanded="open"
        :aria-controls="`${id}-panel`"
        @click="open = !open"
      >
        <v-icon :icon="icon" color="secondary" size="20" aria-hidden="true" />
        <span class="collapsible-label"><slot name="title" /></span>
        <v-icon icon="mdi-chevron-down" class="collapsible-chevron" aria-hidden="true" />
      </button>
    </h2>

    <!-- Collapsed content is inert and invisible: out of the tab order and the accessibility tree -->
    <div :id="`${id}-panel`" class="collapsible-panel" :class="{ 'is-open': open }">
      <div class="collapsible-inner" :inert="!open">
        <div class="collapsible-content">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{ id: string; icon: string; defaultOpen?: boolean }>(), {
  defaultOpen: false, // sections start collapsed; a #hash or a nav link opens the one you want
})

const open = ref(props.defaultOpen)

// Links to this section (the hero nav, or a #hash in the address) must reveal it if it is collapsed
function revealIfTargeted(e?: MouseEvent) {
  if (e) {
    const link = (e.target as Element | null)?.closest?.('a[href^="#"]')
    if (link?.getAttribute('href') === `#${props.id}`) open.value = true
  } else if (window.location.hash === `#${props.id}`) {
    open.value = true
  }
}
const onHashChange = () => revealIfTargeted()

onMounted(() => {
  revealIfTargeted()
  document.addEventListener('click', revealIfTargeted)
  window.addEventListener('hashchange', onHashChange)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', revealIfTargeted)
  window.removeEventListener('hashchange', onHashChange)
})
</script>

<style scoped>
.collapsible {
  margin-top: 48px;
}
/* A run of collapsed sections reads as one compact list; opening one restores the roomy spacing */
.collapsible.is-collapsed + .collapsible.is-collapsed {
  margin-top: 8px;
}

.collapsible-heading {
  margin: 0;
}

.collapsible-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 48px; /* comfortable touch target */
  padding: 8px 4px;
  border: 0;
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px 6px 0 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 1.5rem; /* same size the section headings had before */
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.15s;
}
.collapsible-trigger:hover {
  background: rgba(var(--v-theme-on-surface), 0.05);
}
.collapsible-trigger:focus-visible {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}

.collapsible-label {
  flex: 1;
  min-width: 0;
}

.collapsible-chevron {
  flex: none;
  transition: transform 0.25s ease;
}
.collapsible-trigger[aria-expanded='true'] .collapsible-chevron {
  transform: rotate(180deg);
}

/* Height animates between 0 and the content's natural height */
.collapsible-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s ease;
}
.collapsible-panel.is-open {
  grid-template-rows: 1fr;
}
.collapsible-inner {
  min-height: 0;
  overflow: hidden;
  visibility: hidden;
  transition: visibility 0s linear 0.25s; /* hide only once the collapse has finished */
}
.collapsible-panel.is-open .collapsible-inner {
  visibility: visible;
  transition-delay: 0s;
}
.collapsible-content {
  padding-top: 16px;
}

@media (prefers-reduced-motion: reduce) {
  .collapsible-panel,
  .collapsible-inner,
  .collapsible-chevron,
  .collapsible-trigger {
    transition: none;
  }
}

/* Always print everything */
@media print {
  .collapsible-panel {
    grid-template-rows: 1fr;
  }
  .collapsible-inner {
    visibility: visible;
  }
  .collapsible-chevron {
    display: none;
  }
}
</style>
