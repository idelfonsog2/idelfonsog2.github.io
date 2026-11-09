<template>
  <v-footer class="justify-center mt-8 bg-transparent">
    <p class="text-body-2 text-medium-emphasis text-center mb-0">{{ c.footer.copyright }}</p>
  </v-footer>
</template>

<script setup lang="ts">
import { useContent } from '../i18n'

const c = useContent()
</script>
