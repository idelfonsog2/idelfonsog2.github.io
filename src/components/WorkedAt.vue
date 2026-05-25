<template>
  <v-card variant="flat" class="text-center mt-12">
    <v-card-title class="justify-center text-subtitle-1 font-weight-semibold">Worked @</v-card-title>
    <v-card-subtitle class="mb-4">
      Enterprise / Healthcare / Retail / Agriculture / Financing / Outsourcing / Startup / Ecommerce
    </v-card-subtitle>
    <v-card-text class="d-flex justify-center align-center flex-wrap" style="gap: 10px;">
      <v-img v-for="logo in logos" :key="logo.alt" :src="logo.src" :alt="logo.alt" height="40" max-width="160"
        width="auto" class="company-logo flex-grow-0" />
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
