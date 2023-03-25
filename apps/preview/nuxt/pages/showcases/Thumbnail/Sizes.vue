<template>
  <div class="flex items-center justify-around max-w-sm">
    <SfThumbnail size="sm" class="mr-2 bg-primary-500" />
    <SfThumbnail size="base" class="mr-2 bg-primary-500" />
    <SfThumbnail size="lg" class="mr-2 bg-primary-500" />
    <SfThumbnail size="xl" class="bg-primary-500" />
  </div>
</template>

<script lang="ts" setup>
import { SfThumbnail } from '@storefront-ui/vue';
</script>
