<script setup lang="ts">
import { components } from '~/utils/components';
type Framework = {
  name: 'vue' | 'react';
  icon: string;
};

const framework = useCookie<Framework>('framework');
</script>
<template>
  <div class="grid grid-cols-12 custom-block gap-8 not-prose mt-8">
    <NuxtLink
      v-for="component in components[framework.name]"
      :key="component"
      :to="`/${framework.name.toLowerCase()}/components/${component.replace('Sf', '').toLowerCase()}`"
      class="col-span-12 md:col-span-4 lg:col-span-3 bg-white border dark:bg-zinc-800 rounded-lg hover:border-primary-500"
    >
      <img :src="`/thumbnails/components/${component.replace('Sf', '')}.png`" />
      <div class="p-4 font-bold">
        {{ component.replace('Sf', '') }}
      </div>
    </NuxtLink>
  </div>
</template>
