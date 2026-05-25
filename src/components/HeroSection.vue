<template>
  <v-card variant="flat">
    <v-card-text>

      <!-- Profile -->
      <v-row align="center" class="mb-6" no-gutters>
        <v-col cols="auto" class="mr-5">
          <v-avatar size="96">
            <v-img src="/img/circular-shot.png" alt="Idelfonso Gutierrez" />
          </v-avatar>
        </v-col>
        <v-col>
          <v-card-title class="pa-0 text-h3 font-weight-bold">Hola 🙋‍♂️</v-card-title>
          <v-card-title class="pa-0 text-h3 font-weight-bold">I'm Idelfonso Gutierrez</v-card-title>
          <v-card-subtitle class="pa-0 text-subtitle-1 mt-1">
            Software Engineer · iOS · Cloud · Data Pipelines
          </v-card-subtitle>
        </v-col>
      </v-row>

      <v-divider class="mb-6" />

      <!-- Bio -->
      <v-card-text class="pa-0 text-h6 font-weight-regular mb-4" style="line-height: 1.7;">
        I build software that ships 🚀 — from native iOS apps 📱 to cloud backends ☁️ and data pipelines 🔁.
        10+ years turning complex requirements into clean, reliable systems ⚙️.
      </v-card-text>

      <v-card-text class="pa-0 text-h6 font-weight-regular mb-4" style="line-height: 1.8;">
        Specializing in the Apple ecosystem 🍎, server-side Swift, and cloud-native architectures 🏗️.
        I care about the details that make software feel effortless to use ✨ and easy to maintain 🧹.
      </v-card-text>

      <v-divider class="mb-6" />

      <!-- Action Buttons -->
      <v-row no-gutters class="ga-3 flex-wrap">
        <v-col v-for="pill in pills" :key="pill.label" cols="auto">
          <v-btn
            :href="pill.href"
            :prepend-icon="pill.icon"
            :color="pill.color"
            variant="outlined"
            rounded="lg"
          >
            {{ pill.label }}
          </v-btn>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const pills = [
  { label: 'Binary Apps', href: '#binary-apps', icon: 'mdi-circle-medium', color: 'success' },
  { label: 'Code', href: '#code', icon: 'mdi-code-braces', color: undefined },
  { label: 'Clients', href: '#clients', icon: 'mdi-handshake', color: undefined },
  { label: "Let's Dance", href: '#dance', icon: 'mdi-coffee', color: undefined },
  { label: 'Services', href: '#services', icon: 'mdi-lightning-bolt', color: undefined },
]
</script>
