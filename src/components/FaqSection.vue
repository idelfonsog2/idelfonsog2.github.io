<template>
  <v-card variant="flat" class="mt-12">
    <v-card-title class="text-subtitle-1 font-weight-semibold d-flex align-center ga-2">
      <v-icon icon="mdi-help-circle-outline" color="primary" size="20" />
      FAQ
    </v-card-title>
    <v-card-text>
      <v-expansion-panels variant="accordion">
        <v-expansion-panel v-for="item in faqs" :key="item.question" :title="item.question">
          <template #text>
            <span v-html="item.answer" />
          </template>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: 'Are you open to new opportunities?',
    answer: "Yes — I'm open to a conversation and exploring what you're working on. No pressure either way; if it's a good fit for both of us, great, and if not, no worries.",
  },
  {
    question: 'What kind of work arrangements do you consider?',
    answer: "Contract, contract-to-hire, or full-time. I'm flexible on structure as long as the work and team are a good fit.",
  },
  {
    question: 'Do you work remotely? What timezone are you in?',
    answer: "I'm fully remote, based in US Central Time (CST/CDT). I have a strong overlap with US timezones and am comfortable working with distributed teams across other regions.",
  },
  {
    question: 'What are your rates?',
    answer: "It depends on the scope, duration, and type of engagement — let's talk and figure out what makes sense for both sides.",
  },
  {
    question: 'What does your tech stack look like?',
    answer: "iOS/Swift for mobile, cloud platforms like AWS and Cloudflare for infrastructure and deployment automation, and Vue/TypeScript for web. I'm comfortable picking up new tools when the project calls for it.",
  },
  {
    question: 'What kind of projects or roles are you a good fit for?',
    answer: 'Mobile (iOS) development, cloud infrastructure and deployment automation, feature development, and general full-stack work — from new concepts to optimizing existing systems.',
  },
  {
    question: 'How do I get in touch?',
    answer: 'Email me at <a href="mailto:idelfonsog2@gmail.com">idelfonsog2@gmail.com</a> — happy to set up a call to discuss further.',
  },
]
</script>
