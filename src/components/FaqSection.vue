<template>
  <section id="faq" class="mt-12" aria-labelledby="faq-title">
    <SectionTitle id="faq-title" icon="mdi-help-circle-outline">{{ c.faq.heading }}</SectionTitle>
    <!-- Flat + border so it matches the other sections instead of floating on a shadow -->
    <v-expansion-panels variant="accordion" class="border rounded-lg">
      <v-expansion-panel v-for="item in c.faq.items" :key="item.question" :title="item.question" elevation="0">
        <template #text>
          <span v-html="item.answer" />
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<script setup lang="ts">
import { useContent } from '../i18n'
import SectionTitle from './SectionTitle.vue'

const c = useContent()
</script>
