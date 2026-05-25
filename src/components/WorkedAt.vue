<template>
  <v-card variant="flat" class="text-center mt-12">
    <v-card-title class="justify-center text-subtitle-1 font-weight-semibold">Worked @</v-card-title>
    <v-card-subtitle class="mb-4">
      Enterprise / Healthcare / Retail / Agriculture / Financing / Outsourcing / Startup / Ecommerce
    </v-card-subtitle>
    <v-card-text>
      <v-row justify="center" align="center" class="flex-wrap ga-6">
        <v-col
          v-for="logo in logos"
          :key="logo.alt"
          cols="auto"
        >
          <v-img
            :src="logo.src"
            :alt="logo.alt"
            height="28"
            width="auto"
            class="company-logo"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
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
  opacity: 0.7;
  filter: grayscale(100%);
  transition: opacity 0.2s, filter 0.2s;
}
.company-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}
</style>
