<template>
  <v-card variant="flat">
    <v-card-text>
      <p class="text-body-2 font-italic text-medium-emphasis mb-4">
        Curiosity and continuous learning are invaluable skills.
      </p>
      <h2 class="text-subtitle-1 font-weight-semibold mb-2">Recent Posts</h2>
      <v-list lines="two" density="compact">
        <v-list-item
          v-for="post in posts"
          :key="post.title"
          :href="post.href"
          :title="post.title"
          :subtitle="post.meta"
          class="px-0"
        />
      </v-list>
      <v-icon color="warning" class="mt-2">mdi-rss</v-icon>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const posts = [
  {
    title: 'Mastering iOS Provisioning: A Developer\'s Guide to Certificates & Profiles - Part 1',
    meta: '4 min read',
    href: '#',
  },
  {
    title: 'PR Merged - Swift AWS Lambda Events',
    meta: '1 min read',
    href: '#',
  },
  {
    title: 'NSManagedObjectContext().refreshAllObjects {}',
    meta: '1 min read',
    href: '#',
  },
]
</script>
