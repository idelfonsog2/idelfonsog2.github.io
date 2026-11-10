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
      <!-- How I start: a short sequence of questions, shown as stages -->
      <div class="hero-flow mb-6">
        <p id="hero-flow-title" class="hero-flow-title">{{ c.hero.approach.title }}</p>
        <ol class="hero-flow-steps" role="list" aria-labelledby="hero-flow-title">
          <li v-for="(step, i) in c.hero.approach.steps" :key="step.title" class="hero-step">
            <span class="hero-step-marker">{{ i + 1 }}</span>
            <div class="hero-step-body">
              <p class="hero-step-title">{{ step.title }}</p>
              <p class="hero-step-question">{{ step.question }}</p>
            </div>
          </li>
        </ol>
        <p class="hero-flow-closing">{{ c.hero.approach.closing }}</p>
      </div>
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
/* Phones: the longer labels (e.g. "Secure Integration & API Governance") can wrap to two lines,
   so reserve prefix + two lines to keep the hero from jumping as the phrase rotates */
@media (max-width: 599px) {
  .hero-headline {
    min-height: 4.5em;
  }
}
.hero-flow-title {
  margin-bottom: 14px;
  font-size: clamp(1.1rem, 2.6vw, 1.3rem);
  font-weight: 600;
  line-height: 1.4;
}
.hero-flow-steps {
  margin: 0;
  padding: 0;
  list-style: none;
}
.hero-step {
  position: relative;
  display: flex;
  gap: 14px;
  padding-bottom: 18px;
}
/* connector between stages */
.hero-step:not(:last-child)::before {
  content: '';
  position: absolute;
  top: 34px;
  bottom: 2px;
  left: 15px;
  width: 2px;
  background: rgba(var(--v-theme-primary), 0.35);
}
.hero-step-marker {
  z-index: 1;
  display: grid;
  flex: 0 0 32px;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 2px solid rgb(var(--v-theme-primary));
  border-radius: 50%;
  background: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-primary));
  font-size: 0.9rem;
  font-weight: 700;
}
.hero-step-body {
  min-width: 0;
  padding-top: 3px;
}
.hero-step-title {
  font-size: clamp(1rem, 2.4vw, 1.15rem);
  font-weight: 700;
  line-height: 1.35;
}
.hero-step-question {
  font-size: clamp(1rem, 2.4vw, 1.1rem);
  line-height: 1.55;
  color: rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity));
}
.hero-flow-closing {
  margin-top: 2px;
  padding-left: 14px;
  border-left: 3px solid rgb(var(--v-theme-secondary)); /* orange accent: a border, never text */
  font-size: clamp(1.05rem, 2.5vw, 1.2rem);
  line-height: 1.55;
}
.hero-label {
  font-size: clamp(1rem, 2.2vw, 1.15rem);
  font-weight: 700;
}
.hero-story {
  font-size: 0.9375rem; /* 15px, still above the 14px readability floor */
  line-height: 1.75;
}
.hero-counter-value {
  /* back to the previous size */
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
}
.hero-counter-label {
  /* back to the previous size */
  font-size: 1rem;
  line-height: 1.5;
}
</style>
