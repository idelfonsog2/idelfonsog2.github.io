<template>
  <v-card variant="flat">
    <v-card-text>

      <!-- Profile -->
      <header>
        <!-- tag="h1": real heading for screen readers/SEO; text-wrap: v-card-title defaults to nowrap + ellipsis -->
        <v-card-title tag="h1" class="pa-0 text-h4 text-sm-h3 font-weight-bold mb-1 text-wrap">
          Hola, I'm Idelfonso Gutierrez 🙋‍♂️
        </v-card-title>
        <v-card-subtitle class="pa-0 text-subtitle-1 mb-6 text-wrap text-medium-emphasis opacity-100">
          Senior Engineer · iOS · Backend · Healthcare Interoperability
        </v-card-subtitle>
      </header>

      <v-divider class="mb-6" />

      <!-- Bio -->
      <v-card-text class="pa-0 text-h6 font-weight-regular mb-4" style="line-height: 1.7;">
        I find the real problem before anyone opens a code editor — then build the full stack to prove it:
        iOS, backend, infra, CI/CD, App Store.
      </v-card-text>

      <v-card-text class="pa-0 text-body-1 text-medium-emphasis mb-6" style="line-height: 1.8;">
        8+ years across iOS, .NET, Kubernetes, and Azure — most recently co-owning a FHIR R4 integration
        platform at Northwestern Medicine, serving 9+ external vendors and exposing Epic clinical data
        at hospital scale. The event schema my team built is now adopted org-wide.
        AI has made me faster at execution; it hasn't replaced the curiosity or the judgment.
      </v-card-text>

      <!-- Primary action -->
      <v-btn
        href="mailto:idelfonsog2@gmail.com"
        prepend-icon="mdi-email-outline"
        color="primary"
        variant="flat"
        size="large"
        rounded="lg"
        class="mb-6"
      >
        Get in touch
      </v-btn>

      <!-- Secondary navigation: one consistent style, 44px+ touch targets -->
      <nav aria-label="Primary" class="mb-6">
        <div class="d-flex flex-wrap ga-3">
          <v-btn
            v-for="pill in pills"
            :key="pill.label"
            :href="pill.href"
            :prepend-icon="pill.icon"
            variant="outlined"
            rounded="lg"
            size="large"
          >
            {{ pill.label }}
          </v-btn>
        </div>
      </nav>

      <v-divider class="mb-6" />

      <!-- Strengths (trimmed to the four that don't repeat the intro above) -->
      <v-row dense>
        <v-col
          v-for="power in superpowers"
          :key="power.label"
          cols="12"
          sm="6"
        >
          <v-card variant="outlined" rounded="lg" class="pa-3 h-100">
            <v-row align="start" no-gutters>
              <v-col cols="auto" class="mr-3">
                <v-icon :icon="power.icon" color="primary" size="20" />
              </v-col>
              <v-col>
                <div class="text-body-2 font-weight-semibold">{{ power.label }}</div>
                <div class="text-body-2 text-medium-emphasis">{{ power.description }}</div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const pills = [
  { label: 'Binary Apps', href: '#binary-apps', icon: 'mdi-apps' },
  { label: 'Code', href: '#code', icon: 'mdi-code-braces' },
  { label: 'Clients', href: '#clients', icon: 'mdi-handshake' },
  { label: "Let's Dance", href: '#dance', icon: 'mdi-coffee' },
  { label: 'Services', href: '#services', icon: 'mdi-lightning-bolt' },
]

const superpowers = [
  {
    label: 'Full-Stack Ownership',
    description: 'iOS → backend → infra → CI/CD → App Store → production',
    icon: 'mdi-layers',
  },
  {
    label: 'Healthcare Interoperability',
    description: 'FHIR R4/DSTU3, Epic SMART on FHIR, HIPAA, multi-vendor API governance',
    icon: 'mdi-hospital-box',
  },
  {
    label: 'Platform Thinking',
    description: 'Builds systems other teams depend on — event schemas, SDKs, integration layers',
    icon: 'mdi-sitemap',
  },
  {
    label: 'Stakeholder Bridge',
    description: 'Translates between clinical/business stakeholders and engineering',
    icon: 'mdi-account-group',
  },
]
</script>
