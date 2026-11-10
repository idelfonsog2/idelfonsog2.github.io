<template>
  <CollapsibleSection id="projects" icon="mdi-code-braces">
    <template #title>{{ c.projects.heading }}</template>

    <v-row density="comfortable">
      <v-col v-for="p in c.projects.items" :key="p.name" cols="12">
        <v-card variant="outlined" rounded="lg" class="pa-4">
          <div class="d-flex flex-wrap align-center ga-2 mb-2">
            <h3 class="text-subtitle-1 font-weight-bold">{{ p.name }}</h3>
            <v-chip size="small" color="secondary" variant="flat">{{ p.status }}</v-chip>
          </div>
          <p class="text-body-2 text-medium-emphasis mb-3">{{ p.description }}</p>
          <div class="d-flex flex-wrap ga-2">
            <v-chip v-for="t in p.tags" :key="t" size="small" variant="outlined">{{ t }}</v-chip>
          </div>
          <v-btn
            v-if="p.link"
            :href="p.link.href"
            target="_blank"
            rel="noopener"
            variant="text"
            color="primary"
            size="large"
            append-icon="mdi-open-in-new"
            class="text-none mt-2 px-2"
          >
            {{ p.link.label }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-card variant="outlined" rounded="lg" class="feature-card pa-4 mt-4">
      <h3 class="text-subtitle-1 font-weight-bold mb-2">{{ c.projects.styleTitle }}</h3>
      <ul class="bullets text-body-2 mb-0">
        <li v-for="b in c.projects.styleBullets" :key="b">{{ b }}</li>
      </ul>
    </v-card>

    <v-btn
      :href="links.github"
      target="_blank"
      rel="noopener"
      variant="outlined"
      size="large"
      prepend-icon="mdi-github"
      class="mt-4"
    >
      {{ c.projects.githubLabel }}
    </v-btn>
  </CollapsibleSection>
</template>

<script setup lang="ts">
import { links } from '../content'
import { useContent } from '../i18n'
import CollapsibleSection from './CollapsibleSection.vue'

const c = useContent()
</script>

<style scoped>
.bullets {
  padding-left: 1.1rem;
}
.bullets li {
  margin: 0.3rem 0;
}
.feature-card {
  background: rgba(var(--v-theme-secondary), 0.08);
  border-color: rgba(var(--v-theme-secondary), 0.5);
}
</style>
