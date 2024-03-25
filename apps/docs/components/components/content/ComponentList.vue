<script setup lang="ts">
import { components } from '~/utils/components';

const { selectedFramework } = useFramework();
</script>
<template>
  <div class="grid grid-cols-12 custom-block gap-8 not-prose mt-8">
    <AppListCard
      v-for="component in components[selectedFramework.name as 'vue' | 'react']"
      :key="component"
      :to="`/${selectedFramework.name.toLowerCase()}/components/${component.replace('Sf', '').toLowerCase()}`"
      class="col-span-12 md:col-span-4 lg:col-span-3"
      :title="component.replace('Sf', '')"
      :img="`/thumbnails/components/${component.replace('Sf', '')}.png`"
    />
  </div>
</template>
