<template>
  <v-card variant="flat">
    <v-card-text>
      <!-- Profile -->
      <header class="d-flex align-center ga-4 mb-6">
        <v-avatar size="80" class="flex-shrink-0">
          <v-img :src="media.avatar" :alt="c.hero.avatarAlt" />
        </v-avatar>
        <div>
          <v-card-title tag="h1" class="hero-name pa-0 font-weight-bold mb-1 text-wrap">
            {{ c.hero.greeting }}
          </v-card-title>
          <p class="hero-headline text-medium-emphasis mb-0">
            <span class="sr-only">{{ c.hero.fullHeadline }}</span>
            <span aria-hidden="true">{{ c.hero.headlinePrefix }} <RotatingWord :words="c.hero.rotating" /></span>
          </p>
        </div>
      </header>

      <v-divider class="mb-6" />

      <!-- Bio -->
      <p class="hero-lead mb-6">{{ c.hero.superpower }}</p>
      <p class="hero-label mb-1">{{ c.hero.storyLabel }}</p>
      <p class="hero-story text-medium-emphasis mb-6">{{ c.hero.story }}</p>

      <!-- Counter -->
      <div class="d-flex align-center ga-3 mb-6">
        <span class="hero-counter-value text-primary">{{ c.hero.counter.value }}</span>
        <span class="hero-counter-label text-medium-emphasis">{{ c.hero.counter.label }}</span>
      </div>

      <!-- Primary action -->
      <v-btn
        :href="`mailto:${links.email}`"
        prepend-icon="mdi-email-outline"
        color="primary"
        variant="flat"
        size="large"
        class="mb-6"
      >
        {{ c.hero.cta }}
      </v-btn>

      <!-- Section navigation: one consistent style, 44px+ touch targets -->
      <nav :aria-label="c.hero.navLabel">
        <div class="d-flex flex-wrap ga-3">
          <v-btn v-for="item in c.hero.nav" :key="item.href" :href="item.href" variant="outlined" size="large">
            <template #prepend>
              <v-icon :icon="item.icon" color="secondary" />
            </template>
            {{ item.label }}
          </v-btn>
        </div>
      </nav>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { links, media } from '../content'
import { useContent } from '../i18n'
import RotatingWord from './RotatingWord.vue'

const c = useContent()
</script>

<style scoped>
/* Explicit sizes: this Vuetify version ignores the legacy text-h* classes. Fluid so mobile never overflows. */
.hero-name {
  /* Size is the previous default (v-card-title); only keep the name from splitting mid-word */
  hyphens: manual;
  overflow-wrap: normal;
  word-break: normal;
}
.hero-headline {
  font-size: 1rem;
  line-height: 1.5;
  /* Always two lines: prefix, then the rotating phrase on its own line, so nothing jumps */
  min-height: 3em;
}
.hero-headline :deep(.rotating) {
  display: block;
}
.hero-lead {
  /* back to the previous size */
  font-size: 1rem;
  line-height: 1.7;
}
.hero-label {
  font-size: clamp(1.15rem, 2.8vw, 1.4rem);
  font-weight: 700;
}
.hero-story {
  /* back to the previous size */
  font-size: 1rem;
  line-height: 1.8;
}
.hero-counter-value {
  font-size: clamp(2.25rem, 6vw, 3.25rem);
  font-weight: 700;
  line-height: 1;
}
.hero-counter-label {
  font-size: clamp(1.05rem, 2.6vw, 1.25rem);
  line-height: 1.4;
}
</style>
