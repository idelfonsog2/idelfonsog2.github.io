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
            Senior Engineer · iOS · Backend · Healthcare Interoperability
          </v-card-subtitle>
        </v-col>
      </v-row>

      <v-divider class="mb-6" />

      <!-- Bio -->
      <v-card-text class="pa-0 text-h6 font-weight-regular mb-4" style="line-height: 1.7;">
        I find the real problem before anyone opens a code editor 🔍 
        — then build the full stack to prove it:
        iOS 📱, backend ⚙️, infra ☁️, CI/CD 🔁, App Store 🚀.
      </v-card-text>

      <v-card-text class="pa-0 text-body-1 text-medium-emphasis mb-6" style="line-height: 1.8;">
        8+ years across iOS, .NET, Kubernetes, and Azure — most recently co-owning a FHIR R4 integration
        platform at Northwestern Medicine 🏥, serving 9+ external vendors and exposing Epic clinical data
        at hospital scale. The event schema my team built is now adopted org-wide 📡.
        AI has made me faster at execution; it hasn't replaced the curiosity or the judgment 🧠.
      </v-card-text>

      <!-- Superpowers -->
      <v-row class="mb-6" dense>
        <v-col
          v-for="power in superpowers"
          :key="power.label"
          cols="12"
          sm="6"
        >
          <v-card variant="tonal" rounded="lg" class="pa-3">
            <v-row align="center" no-gutters>
              <v-col cols="auto" class="mr-3">
                <v-icon :icon="power.icon" :color="power.color" />
              </v-col>
              <v-col>
                <div class="text-body-2 font-weight-semibold">{{ power.label }}</div>
                <div class="text-caption text-medium-emphasis">{{ power.description }}</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="mb-6" />

      <!-- Action Buttons -->
      <v-row no-gutters class="ga-3 flex-wrap">
        <v-col v-for="pill in pills" :key="pill.label" cols="auto" align-self="center">
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

const superpowers = [
  {
    label: 'Problem Discovery',
    description: 'Finds the real problem before anyone opens a code editor',
    icon: 'mdi-magnify',
    color: 'blue',
  },
  {
    label: 'Full-Stack Ownership',
    description: 'iOS → backend → infra → CI/CD → App Store → production',
    icon: 'mdi-layers',
    color: 'purple',
  },
  {
    label: 'Healthcare Interoperability',
    description: 'FHIR R4/DSTU3, Epic SMART on FHIR, HIPAA, multi-vendor API governance',
    icon: 'mdi-hospital-box',
    color: 'red',
  },
  {
    label: 'Platform Thinking',
    description: 'Builds systems other teams depend on — event schemas, SDKs, integration layers',
    icon: 'mdi-sitemap',
    color: 'teal',
  },
  {
    label: 'Stakeholder Bridge',
    description: 'Translates between clinical/business stakeholders and engineering',
    icon: 'mdi-account-group',
    color: 'orange',
  },
  {
    label: 'AI-Augmented Execution',
    description: 'Uses AI to accelerate delivery — judgment and taste still human',
    icon: 'mdi-robot',
    color: 'green',
  },
]
</script>
