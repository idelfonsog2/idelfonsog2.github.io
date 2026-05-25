<template>
  <v-card variant="flat">
    <v-card-text>

      <!-- Profile -->
      <v-row align="center" class="mb-4" no-gutters>
        <v-col cols="auto" class="mr-4">
          <v-avatar size="80">
            <v-img src="/img/circular-shot.png" alt="Idelfonso Gutierrez" />
          </v-avatar>
        </v-col>
        <v-col>
          <v-card-title class="pa-0 text-h4 font-weight-bold">Hola 🙋🏻‍♂️ I'm Idelfonso</v-card-title>
          <v-card-subtitle class="pa-0">Software Engineer (Remote 🌐)</v-card-subtitle>
        </v-col>
      </v-row>

      <v-divider class="mb-4" />

      <!-- Bio -->
      <v-card-text class="pa-0 text-body-1 mb-3">
        As a dedicated software developer, I specialize in crafting ☁️ cloud-based applications and
        orchestrating ⚙️ deployment automation. My expertise extends to defining 📝 feature requirements
        and creating sleek 📱 mobile apps, especially for the Apple ecosystem. My aim? Streamlined,
        intuitive software that delights its users.
      </v-card-text>
      <v-card-text class="pa-0 text-body-1 mb-3">
        When designed thoughtfully, I believe technology can be powerful and wonderfully simple.
      </v-card-text>
      <v-card-text class="pa-0 text-body-1 mb-4">
        I'm here to elevate your project by exploring a new concept, adding features, or optimizing operations.
      </v-card-text>

      <v-divider class="mb-4" />

      <!-- Experience Timeline -->
      <v-card-subtitle class="pa-0 font-weight-semibold mb-3">Experience</v-card-subtitle>
      <v-timeline side="end" density="compact" truncate-line="both">
        <v-timeline-item
          v-for="item in timeline"
          :key="item.company"
          :dot-color="item.color"
          size="small"
        >
          <v-row align="center" no-gutters>
            <v-col class="font-weight-medium">{{ item.role }}</v-col>
            <v-col cols="auto" class="text-caption text-medium-emphasis">{{ item.period }}</v-col>
          </v-row>
          <v-card-subtitle class="pa-0">{{ item.company }}</v-card-subtitle>
        </v-timeline-item>
      </v-timeline>

      <v-divider class="my-4" />

      <!-- Action Buttons -->
      <v-row no-gutters class="ga-2 flex-wrap">
        <v-col v-for="pill in pills" :key="pill.label" cols="auto">
          <v-btn
            :href="pill.href"
            :prepend-icon="pill.icon"
            variant="outlined"
            rounded="lg"
            size="small"
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
  { label: 'Code', href: '#code', icon: 'mdi-code-braces' },
  { label: 'Clients', href: '#clients', icon: 'mdi-handshake' },
  { label: "Let's Dance", href: '#dance', icon: 'mdi-coffee' },
  { label: 'Services', href: '#services', icon: 'mdi-lightning-bolt' },
]

const timeline = [
  { role: 'iOS & Backend Engineer', company: 'Northwestern Medicine', period: '2020 – 2022', color: 'blue' },
  { role: 'Mobile Engineer', company: 'Ulta Beauty', period: '2019 – 2020', color: 'pink' },
  { role: 'iOS Developer', company: 'KIN+KARTA', period: '2018 – 2019', color: 'purple' },
  { role: 'iOS Developer', company: 'YellowPepper', period: '2016 – 2018', color: 'yellow' },
  { role: 'iOS Developer', company: 'GrowIt', period: '2015 – 2016', color: 'green' },
]
</script>
