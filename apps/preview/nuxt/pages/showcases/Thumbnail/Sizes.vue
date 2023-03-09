<template>
  <div className="flex items-center justify-around max-w-sm">
    <VsfThumbnail size="sm" class-name="bg-primary-500 mr-2" />
    <VsfThumbnail size="base" class-name="bg-primary-500 mr-2" />
    <VsfThumbnail size="lg" class-name="bg-primary-500 mr-2" />
    <VsfThumbnail size="xl" class-name="bg-primary-500" />
  </div>
</template>

<script lang="ts" setup>
import { VsfThumbnail } from '@storefront-ui/vue/components/VsfThumbnail/index';
</script>
