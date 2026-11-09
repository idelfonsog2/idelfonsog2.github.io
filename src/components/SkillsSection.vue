<template>
  <section id="skills" class="mt-12" aria-labelledby="skills-title">
    <SectionTitle id="skills-title" icon="mdi-lightning-bolt">{{ c.skills.heading }}</SectionTitle>

    <h3 class="text-subtitle-1 font-weight-bold mb-2">{{ c.skills.languagesHeading }}</h3>
    <div class="d-flex flex-wrap ga-2 mb-6">
      <v-chip v-for="l in c.skills.languages" :key="l.name" variant="outlined">
        {{ l.name }} · {{ l.level }}
      </v-chip>
    </div>

    <h3 class="text-subtitle-1 font-weight-bold mb-2">{{ c.skills.softHeading }}</h3>
    <dl class="mb-6">
      <div v-for="s in c.skills.soft" :key="s.name" class="mb-2">
        <dt class="d-inline text-body-2 font-weight-semibold">{{ s.name }}</dt>
        <dd class="d-inline text-body-2 text-medium-emphasis"> — {{ s.line }}</dd>
      </div>
    </dl>

    <h3 class="text-subtitle-1 font-weight-bold mb-2">{{ c.skills.stackHeading }}</h3>
    <div v-for="g in c.skills.stack" :key="g.group" class="mb-4">
      <h4 class="text-body-2 font-weight-semibold mb-1">{{ g.group }}</h4>
      <div class="d-flex flex-wrap ga-2">
        <v-chip v-for="i in g.items" :key="i" size="small" variant="outlined" class="stack-chip">{{ i }}</v-chip>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useContent } from '../i18n'
import SectionTitle from './SectionTitle.vue'

const c = useContent()
</script>

<style scoped>
/* Tech stack chips fill with the theme's blue on hover (theme-aware: lighter blue + dark text in dark mode) */
.stack-chip {
  cursor: default;
  transition: background-color 0.15s, color 0.15s, border-color 0.15s;
}
.stack-chip:hover {
  background-color: rgb(var(--v-theme-primary));
  border-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
}
@media (prefers-reduced-motion: reduce) {
  .stack-chip {
    transition: none;
  }
}
</style>
