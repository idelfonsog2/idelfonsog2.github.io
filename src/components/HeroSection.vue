<template>
  <div>
    <h1 class="text-h3 font-weight-bold mb-1">Hola 🙋🏻‍♂️</h1>
    <h1 class="text-h3 font-weight-bold mb-3">I'm Idelfonso</h1>
    <p class="text-subtitle-1 text-medium-emphasis mb-6">Software Engineer (Remote 🌐)</p>

    <p class="text-body-1 mb-3">
      As a dedicated software developer, I specialize in crafting ☁️ cloud-based applications and
      orchestrating ⚙️ deployment automation. My expertise extends to defining 📝 feature requirements
      and creating sleek 📱 mobile apps, especially for the Apple ecosystem. My aim? Streamlined,
      intuitive software that delights its users.
    </p>

    <p class="text-body-1 mb-3">
      When designed thoughtfully, I believe technology can be powerful and wonderfully simple.
    </p>

    <p class="text-body-1 mb-6">
      I'm here to elevate your project by exploring a new concept, adding features, or optimizing operations.
    </p>

    <div class="d-flex flex-wrap ga-3">
      <v-chip v-for="pill in pills" :key="pill.label" :href="pill.href" variant="outlined" size="large">
        {{ pill.label }}
      </v-chip>
    </div>
  </div>
</template>

<script setup lang="ts">
const pills = [
  { label: '💻 Code', href: '#code' },
  { label: '🤝 Clients', href: '#clients' },
  { label: '💃 Let\'s Dance ☕️', href: '#dance' },
  { label: '⚡ Services', href: '#services' },
]
</script>
