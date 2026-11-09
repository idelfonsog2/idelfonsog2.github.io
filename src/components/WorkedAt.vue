<template>
  <section class="mt-12" aria-labelledby="worked-at">
    <SectionTitle id="worked-at" icon="mdi-domain">{{ c.workedAt.title }}</SectionTitle>
    <p class="text-body-2 text-medium-emphasis mb-4">{{ c.workedAt.industries }}</p>
    <div class="logo-grid">
      <!-- Fixed-size box reserves space before lazy-load (no layout shift); contain keeps aspect ratio -->
      <div v-for="logo in logos" :key="logo.alt" class="logo-cell">
        <v-img :src="logo.src" :alt="logo.alt" height="40" contain class="company-logo" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { media } from '../content'
import { useContent } from '../i18n'
import SectionTitle from './SectionTitle.vue'

const c = useContent()

const logos = [
  { src: media.nm, alt: 'Northwestern Medicine' },
  { src: media.ulta, alt: 'Ulta Beauty' },
  { src: media.growit, alt: 'GrowIt' },
  { src: media.kinkarta, alt: 'KIN+KARTA' },
  { src: media.yellowpepper, alt: 'YellowPepper' },
  { src: media.ally, alt: "Ally's Flower" },
]
</script>

<style scoped>
.logo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-items: center;
  align-items: center;
}

@media (min-width: 600px) {
  .logo-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.logo-cell {
  width: 100%;
  max-width: 160px;
  height: 40px;
}

.company-logo {
  opacity: 0.7;
  filter: grayscale(100%);
  mix-blend-mode: multiply; /* drops white logo backgrounds onto the grey page */
  transition: opacity 0.2s, filter 0.2s;
}

.company-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}
</style>
