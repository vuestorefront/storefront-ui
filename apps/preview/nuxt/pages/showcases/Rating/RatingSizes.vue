<template>
  <div class="flex flex-col">
    <SfRating :value="4" size="xs" />
    <SfRating :value="4" size="sm" />
    <SfRating :value="4" size="base" />
    <SfRating :value="4" />
    <SfRating :value="4" size="lg" />
    <SfRating :value="4" size="xl" />
  </div>
</template>

<script lang="ts" setup>
import { SfRating } from '@storefront-ui/vue';
</script>
