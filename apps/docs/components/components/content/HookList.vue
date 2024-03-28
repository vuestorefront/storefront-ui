<script setup lang="ts">
import { hooks } from '~/utils/hooks';
const { selectedFramework } = useFramework();
</script>
<template>
  <div class="grid grid-cols-12 custom-block gap-8 not-prose mt-8">
    <AppListCard
      v-for="hook in hooks[selectedFramework.name as 'vue' | 'react']"
      :key="hook"
      :to="`/${selectedFramework.name.toLowerCase()}/hooks/${hook.toLowerCase()}`"
      class="col-span-12 md:col-span-4 lg:col-span-3"
      :title="hook"
    />
  </div>
</template>
