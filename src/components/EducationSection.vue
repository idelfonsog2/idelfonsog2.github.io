<template>
  <section id="education" class="mt-12" aria-labelledby="education-title">
    <SectionTitle id="education-title" icon="mdi-school-outline">{{ c.education.heading }}</SectionTitle>
    <ul class="plain-list mb-8">
      <li v-for="e in c.education.items" :key="e.program" class="mb-3">
        <p class="text-body-1 font-weight-semibold mb-0">{{ e.program }}</p>
        <p class="text-body-2 text-medium-emphasis mb-0">
          {{ e.school }}<span v-if="e.period"> · {{ e.period }}</span>
        </p>
      </li>
    </ul>

    <SectionTitle id="certifications-title" icon="mdi-certificate-outline">{{ c.education.certHeading }}</SectionTitle>
    <ul class="plain-list">
      <li v-for="cert in c.education.certs" :key="cert.name" class="mb-3">
        <p class="text-body-1 font-weight-semibold mb-0">{{ cert.name }}</p>
        <p class="text-body-2 text-medium-emphasis mb-0">{{ cert.issuer }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useContent } from '../i18n'
import SectionTitle from './SectionTitle.vue'

const c = useContent()
</script>

<style scoped>
.plain-list {
  list-style: none;
  padding: 0;
}
</style>
