<template>
  <div class="flex flex-col">
    <VsfRating :value="4" size="xs" />
    <VsfRating :value="4" size="sm" />
    <VsfRating :value="4" size="base" />
    <VsfRating :value="4" />
    <VsfRating :value="4" size="lg" />
    <VsfRating :value="4" size="xl" />
  </div>
</template>

<script lang="ts" setup>
import { VsfRating } from '@storefront-ui/vue/components/VsfRating/index';
</script>
