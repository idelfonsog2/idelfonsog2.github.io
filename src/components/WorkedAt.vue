<template>
  <v-card variant="flat" class="mt-12">
    <v-card-title tag="h2" class="text-h6 font-weight-semibold d-flex align-center ga-2 text-wrap">
      <v-icon icon="mdi-domain" color="primary" size="20" />
      Worked @
    </v-card-title>
    <v-card-subtitle class="mb-4 text-wrap text-medium-emphasis opacity-100">
      Enterprise / Healthcare / Retail / Agriculture / Financing / Outsourcing / Startup / Ecommerce
    </v-card-subtitle>
    <v-card-text>
      <div class="logo-grid">
        <!-- Fixed-size box reserves space before lazy-load (no layout shift); contain keeps aspect ratio -->
        <div v-for="logo in logos" :key="logo.alt" class="logo-cell">
          <v-img :src="logo.src" :alt="logo.alt" height="40" contain class="company-logo" />
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const logos = [
  { src: '/img/nm-logo.png', alt: 'Northwestern Medicine' },
  { src: '/img/ultabeauty.png', alt: 'Ulta Beauty' },
  { src: '/img/growit.png', alt: 'GrowIt' },
  { src: '/img/kinkarta.png', alt: 'KIN+KARTA' },
  { src: '/img/yellowpepper.png', alt: 'YellowPepper' },
  { src: '/img/ally_logo.png', alt: "Ally's Flower" },
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
  transition: opacity 0.2s, filter 0.2s;
}

.company-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}
</style>
