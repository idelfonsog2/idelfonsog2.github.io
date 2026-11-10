<template>
  <header class="d-flex justify-end ga-2 pt-4">
    <!-- Language: one button that flips in place; label is the language you'd switch to -->
    <v-btn
      class="header-btn"
      variant="outlined"
      size="large"
      prepend-icon="mdi-translate"
      :lang="target"
      :aria-label="c.header.switchLanguage"
      :title="c.header.switchLanguage"
      @click="setLocale(target)"
    >
      {{ c.header.langCode }}
    </v-btn>

    <!-- Theme: icon shows what you'd switch to -->
    <v-btn
      class="header-btn header-btn--icon"
      variant="outlined"
      size="large"
      icon
      :aria-label="isDark ? c.header.themeToLight : c.header.themeToDark"
      :title="isDark ? c.header.themeToLight : c.header.themeToDark"
      @click="toggleTheme"
    >
      <v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" />
    </v-btn>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { locale, setLocale, useContent, type Locale } from '../i18n'
import { saveMode, type Mode } from '../theme'

const c = useContent()
const theme = useTheme()

const target = computed<Locale>(() => (locale.value === 'en' ? 'es' : 'en'))
const isDark = computed(() => theme.global.name.value === 'dark')

function toggleTheme() {
  const next: Mode = isDark.value ? 'light' : 'dark'
  theme.change(next)
  saveMode(next)
}
</script>

<style scoped>
/* Both controls share one height; the icon-only theme button is a 44px circle */
.header-btn {
  height: 44px;
  min-height: 44px;
}
.header-btn--icon {
  width: 44px;
  min-width: 44px;
  padding: 0;
}
</style>
