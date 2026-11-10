<template>
  <v-app>
    <a class="skip-link" href="#main-content">{{ c.skip }}</a>
    <v-main id="main-content" tabindex="-1">
      <v-container max-width="760">
        <SiteHeader />
        <HeroSection />
        <WorkedAt />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <FaqSection />
        <ContactSection />
      </v-container>
    </v-main>
    <!-- Outside <main> so it counts as the page's footer (contentinfo) landmark -->
    <SiteFooter />
    <QuickAnswers />
  </v-app>
</template>

<script setup lang="ts">
import { useContent } from './i18n'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import WorkedAt from './components/WorkedAt.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import QuickAnswers from './components/QuickAnswers.vue'

const c = useContent()
</script>
