<template>
  <v-app>
    <v-main>
      <v-container max-width="1100">
        <SiteHeader />
        <v-row class="mt-4">
          <v-col cols="12" md="8">
            <HeroSection />
          </v-col>
          <v-col cols="12" md="4">
            <RecentPosts />
          </v-col>
        </v-row>
        <WorkedAt />
      </v-container>
      <SiteFooter />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import RecentPosts from './components/RecentPosts.vue'
import WorkedAt from './components/WorkedAt.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
