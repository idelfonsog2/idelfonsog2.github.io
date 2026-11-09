<template>
  <h2 :id="id" class="section-title d-flex align-center ga-2 text-h6 font-weight-semibold mb-4">
    <v-icon :icon="icon" color="secondary" size="20" aria-hidden="true" />
    <slot />
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id: string; icon: string }>()
</script>
