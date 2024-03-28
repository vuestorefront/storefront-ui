<script setup lang="ts">
defineProps<{
  to: string;
  title: string;
  img?: string;
}>();
</script>
<template>
  <NuxtLink :to="to" class="bg-white border dark:bg-zinc-800 rounded-lg hover:border-primary-500">
    <img v-if="img" :src="img" class="aspect-video object-cover rounded-t-lg" />
    <div class="p-4 font-bold">
      {{ title }}
    </div>
  </NuxtLink>
</template>
