<script setup lang="ts">
import { blocks } from '~/utils/blocks';
const { selectedFramework } = useFramework();
</script>
<template>
  <div class="grid grid-cols-12 custom-block gap-8 not-prose mt-8">
    <AppListCard
      v-for="block in blocks[selectedFramework.name as 'vue' | 'react']"
      :key="block"
      :to="`/${selectedFramework.name.toLowerCase()}/blocks/${block.toLowerCase()}`"
      class="col-span-12 md:col-span-4 lg:col-span-3"
      :title="block.replace('Sf', '')"
      :img="`/v2/thumbnails/blocks/${block.replace('Sf', '')}.png`"
    />
  </div>
</template>
