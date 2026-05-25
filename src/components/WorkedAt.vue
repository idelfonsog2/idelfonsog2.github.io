<template>
  <div class="text-center mt-12">
    <h3 class="text-subtitle-1 font-weight-semibold mb-1">Worked @</h3>
    <p class="text-caption text-medium-emphasis mb-4">
      Enterprise / Healthcare / Retail / Agriculture / Financing / Outsourcing / Startup / Ecommerce
    </p>
    <div class="d-flex justify-center flex-wrap ga-6">
      <img
        v-for="logo in logos"
        :key="logo.alt"
        :src="logo.src"
        :alt="logo.alt"
        class="company-logo"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  { src: '/img/nm-logo.png', alt: 'Northwestern Medicine' },
  { src: '/img/ultabeauty.png', alt: 'Ulta Beauty' },
  { src: '/img/gamejame.png', alt: 'GrowIt' },
  { src: '/img/kinkarta.png', alt: 'KIN+KARTA' },
  { src: '/img/yellowpepper.png', alt: 'YellowPepper' },
  { src: '/img/ally_logo.png', alt: "Ally's Flower" },
]
</script>

<style scoped>
.company-logo {
  height: 28px;
  opacity: 0.7;
  filter: grayscale(100%);
  transition: opacity 0.2s, filter 0.2s;
}
.company-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}
</style>
