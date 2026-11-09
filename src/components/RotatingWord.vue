<template>
  <span class="rotating" aria-hidden="true">
    <Transition name="rot" mode="out-in">
      <span :key="current">{{ words[current] }}</span>
    </Transition>
  </span>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{ words: string[] }>()
const current = ref(0)
let timer: number | undefined

function stop() {
  if (timer) window.clearInterval(timer)
  timer = undefined
}

function start() {
  stop()
  // Respect reduced motion: show the first phrase only
  if (props.words.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = window.setInterval(() => {
    current.value = (current.value + 1) % props.words.length
  }, 2600)
}

onMounted(start)
onBeforeUnmount(stop)
watch(
  () => props.words,
  () => {
    current.value = 0
    start()
  },
)
</script>

<style scoped>
.rotating {
  display: inline-block;
  color: rgb(var(--v-theme-primary));
  font-weight: 600;
}
.rotating > span {
  display: inline-block;
}
.rot-enter-active,
.rot-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.rot-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.rot-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
@media (prefers-reduced-motion: reduce) {
  .rot-enter-active,
  .rot-leave-active {
    transition: none;
  }
}
</style>
