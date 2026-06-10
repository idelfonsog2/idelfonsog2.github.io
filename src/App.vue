<template>
  <v-app>
    <v-main>
      <v-container max-width="760">
        <v-row class="mt-4">
          <v-col cols="12">
            <HeroSection />
          </v-col>
        </v-row>
        <WorkedAt />
        <FaqSection />
      </v-container>
      <SiteFooter />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import WorkedAt from './components/WorkedAt.vue'
import FaqSection from './components/FaqSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
