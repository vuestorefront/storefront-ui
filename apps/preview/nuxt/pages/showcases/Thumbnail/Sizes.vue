<template>
  <div className="flex items-center justify-around max-w-sm">
    <SfThumbnail size="sm" class="bg-primary-500 mr-2" />
    <SfThumbnail size="base" class="bg-primary-500 mr-2" />
    <SfThumbnail size="lg" class="bg-primary-500 mr-2" />
    <SfThumbnail size="xl" class="bg-primary-500" />
  </div>
</template>

<script lang="ts" setup>
import { SfThumbnail } from '@storefront-ui/vue';
</script>
