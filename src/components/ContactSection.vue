<template>
  <section id="contact" class="mt-12" aria-labelledby="contact-title">
    <SectionTitle id="contact-title" icon="mdi-email-outline">{{ c.contact.heading }}</SectionTitle>
    <p class="text-body-1 mb-4">{{ c.contact.text }}</p>
    <div class="d-flex flex-wrap ga-3">
      <v-btn :href="`mailto:${links.email}`" color="primary" variant="flat" size="large" prepend-icon="mdi-email-outline">
        {{ c.contact.email }}
      </v-btn>
      <v-btn :href="links.linkedin" target="_blank" rel="noopener" variant="outlined" size="large" prepend-icon="mdi-linkedin">
        {{ c.contact.linkedin }}
      </v-btn>
      <v-btn :href="links.github" target="_blank" rel="noopener" variant="outlined" size="large" prepend-icon="mdi-github">
        {{ c.contact.github }}
      </v-btn>
    </div>
  </section>
</template>

<script setup lang="ts">
import { links } from '../content'
import { useContent } from '../i18n'
import SectionTitle from './SectionTitle.vue'

const c = useContent()
</script>
