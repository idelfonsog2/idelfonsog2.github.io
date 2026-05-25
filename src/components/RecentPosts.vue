<template>
  <v-card variant="flat">
    <v-card-text>
      <v-card-subtitle class="pa-0 font-italic mb-4">
        Curiosity and continuous learning are invaluable skills.
      </v-card-subtitle>
      <v-card-title class="pa-0 text-subtitle-1 font-weight-semibold mb-2">Recent Posts</v-card-title>
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
      <v-btn
        href="#"
        variant="plain"
        prepend-icon="mdi-rss"
        color="warning"
        size="small"
        class="pa-0 mt-1"
      >
        RSS Feed
      </v-btn>
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
