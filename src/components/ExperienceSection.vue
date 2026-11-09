<template>
  <section id="experience" class="mt-12" aria-labelledby="experience-title">
    <SectionTitle id="experience-title" icon="mdi-briefcase-outline">{{ c.experience.heading }}</SectionTitle>
    <p class="text-body-1 text-medium-emphasis mb-6">{{ c.experience.intro }}</p>

    <!-- Capabilities -->
    <v-row density="comfortable" class="mb-2">
      <v-col v-for="cap in c.experience.capabilities" :key="cap.title" cols="12" sm="6">
        <v-card variant="outlined" rounded="lg" class="pa-3 h-100">
          <div class="d-flex ga-3">
            <v-icon :icon="cap.icon" color="primary" size="20" class="mt-1" aria-hidden="true" />
            <div>
              <h3 class="text-body-2 font-weight-semibold mb-1">{{ cap.title }}</h3>
              <p class="text-body-2 text-medium-emphasis mb-0">{{ cap.description }}</p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Roles -->
    <article v-for="role in c.experience.roles" :key="role.id" class="role mt-10">
      <div class="d-flex align-center ga-4 mb-3">
        <v-img :src="media[role.id]" alt="" width="96" height="40" contain class="logo-multiply flex-grow-0 flex-shrink-0" />
        <div>
          <h3 class="text-h6 font-weight-bold">{{ role.company }}</h3>
          <div class="d-flex flex-wrap align-center ga-2">
            <v-chip size="small" color="secondary" variant="flat">{{ role.badge }}</v-chip>
            <span class="text-body-2 text-medium-emphasis">{{ role.location }}</span>
          </div>
        </div>
      </div>
      <p class="text-body-1 text-primary font-weight-semibold mb-0">{{ role.title }}</p>
      <p class="text-body-2 text-medium-emphasis mb-3">{{ role.dates }}</p>
      <p class="text-body-1 mb-3">{{ role.summary }}</p>
      <ul class="bullets text-body-2">
        <li v-for="h in role.highlights" :key="h">{{ h }}</li>
      </ul>

      <!-- Feature cards -->
      <v-card
        v-for="f in role.features"
        :key="f.title"
        variant="outlined"
        rounded="lg"
        class="feature-card pa-4 mt-4"
      >
        <v-row density="comfortable">
          <v-col cols="12" :md="f.stats.length > 1 ? 8 : 9">
            <v-chip size="small" color="secondary" variant="flat" class="mb-2">{{ f.tag }}</v-chip>
            <h4 class="text-subtitle-1 font-weight-bold mb-2">{{ f.title }}</h4>
            <p class="text-body-2 text-medium-emphasis mb-2">{{ f.description }}</p>
            <ul class="bullets text-body-2 mb-0">
              <li v-for="b in f.bullets" :key="b">{{ b }}</li>
            </ul>
          </v-col>
          <v-col cols="12" :md="f.stats.length > 1 ? 4 : 3">
            <div class="d-flex flex-row flex-md-column ga-2 stat-col">
              <div v-for="s in f.stats" :key="s.label" class="stat flex-grow-1 text-center pa-2">
                <div class="text-h6 text-primary font-weight-bold">{{ s.value }}</div>
                <div class="text-caption text-medium-emphasis">{{ s.label }}</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>

      <!-- Result strip -->
      <v-card v-if="role.result" variant="outlined" rounded="lg" class="feature-card pa-4 mt-4">
        <p class="text-h6 text-primary font-weight-bold mb-1">{{ role.result.headline }}</p>
        <p class="text-body-2 text-medium-emphasis mb-3">{{ role.result.line }}</p>
        <div class="d-flex flex-wrap ga-2">
          <v-chip v-for="m in role.result.minis" :key="m" size="small" variant="outlined">{{ m }}</v-chip>
        </div>
      </v-card>
    </article>

    <!-- Other clients -->
    <h3 class="text-subtitle-1 font-weight-bold mt-10 mb-3">{{ c.experience.clientsHeading }}</h3>
    <v-row density="comfortable">
      <v-col v-for="cl in c.experience.clients" :key="cl.id" cols="12" sm="4">
        <v-card variant="outlined" rounded="lg" class="pa-3 h-100 d-flex align-center ga-3">
          <v-img :src="media[cl.id]" alt="" width="72" height="32" contain class="logo-multiply flex-grow-0 flex-shrink-0" />
          <div>
            <p class="text-body-2 font-weight-semibold mb-0">{{ cl.name }}</p>
            <p class="text-body-2 text-medium-emphasis mb-0">{{ cl.title }}</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import { media } from '../content'
import { useContent } from '../i18n'
import SectionTitle from './SectionTitle.vue'

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
.stat {
  background: rgba(var(--v-theme-surface), 0.8);
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 12px;
}
.logo-multiply {
  mix-blend-mode: multiply;
}
</style>
