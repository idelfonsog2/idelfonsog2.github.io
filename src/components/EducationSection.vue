<template>
  <CollapsibleSection id="education" icon="mdi-school-outline">
    <template #title>{{ c.education.heading }}</template>
    <ul class="plain-list">
      <li v-for="e in c.education.items" :key="e.program" class="mb-3">
        <p class="text-body-1 font-weight-semibold mb-0">{{ e.program }}</p>
        <p class="text-body-2 text-medium-emphasis mb-0">
          {{ e.school }}<span v-if="e.period"> · {{ e.period }}</span>
        </p>
      </li>
    </ul>
  </CollapsibleSection>

  <CollapsibleSection id="certifications" icon="mdi-certificate-outline">
    <template #title>{{ c.education.certHeading }}</template>
    <ul class="plain-list">
      <li v-for="cert in c.education.certs" :key="cert.name" class="mb-3">
        <p class="text-body-1 font-weight-semibold mb-0">{{ cert.name }}</p>
        <p class="text-body-2 text-medium-emphasis mb-0">{{ cert.issuer }}</p>
      </li>
    </ul>
  </CollapsibleSection>
</template>

<script setup lang="ts">
import { useContent } from '../i18n'
import CollapsibleSection from './CollapsibleSection.vue'

const c = useContent()
</script>

<style scoped>
.plain-list {
  list-style: none;
  padding: 0;
}
</style>
