<template>
  <header class="d-flex justify-end pt-4">
    <v-btn-toggle
      :model-value="locale"
      mandatory
      divided
      variant="outlined"
      rounded="pill"
      :aria-label="c.langLabel"
      @update:model-value="setLocale"
    >
      <v-btn value="en" size="large" lang="en" aria-label="English">EN</v-btn>
      <v-btn value="es" size="large" lang="es" aria-label="Español">ES</v-btn>
    </v-btn-toggle>
  </header>
</template>

<script setup lang="ts">
import { locale, setLocale, useContent } from '../i18n'

const c = useContent()
</script>
