<template>
  <v-card variant="flat">
    <v-card-text>
      <!-- Profile -->
      <header class="d-flex align-center ga-4 mb-6">
        <v-avatar size="80" class="flex-shrink-0">
          <v-img :src="media.avatar" :alt="c.hero.avatarAlt" />
        </v-avatar>
        <div>
          <v-card-title tag="h1" class="pa-0 text-h4 text-sm-h3 font-weight-bold mb-1 text-wrap">
            {{ c.hero.greeting }}
          </v-card-title>
          <p class="hero-headline text-subtitle-1 text-medium-emphasis mb-0">
            <span class="sr-only">{{ c.hero.fullHeadline }}</span>
            <span aria-hidden="true">{{ c.hero.headlinePrefix }} <RotatingWord :words="c.hero.rotating" /></span>
          </p>
        </div>
      </header>

      <v-divider class="mb-6" />

      <!-- Bio -->
      <p class="text-h6 font-weight-regular mb-4" style="line-height: 1.7;">{{ c.hero.superpower }}</p>
      <p class="text-body-1 mb-4" style="line-height: 1.8;">{{ c.hero.subhead }}</p>
      <p class="text-body-1 text-medium-emphasis mb-6" style="line-height: 1.8;">{{ c.hero.story }}</p>

      <!-- Counter -->
      <div class="d-flex align-center ga-3 mb-6">
        <span class="text-h3 text-primary font-weight-bold">{{ c.hero.counter.value }}</span>
        <span class="text-body-1 text-medium-emphasis">{{ c.hero.counter.label }}</span>
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
/* Reserve two lines so the rotating phrase never changes the page height */
.hero-headline {
  min-height: 3em;
}
</style>
