<template>
  <div class="flex flex-col">
    <VsfRating :value="0" />
    <VsfRating :value="3.5" />
    <VsfRating :value="3.5" half-increment />
    <VsfRating :value="6" :max="8" />
  </div>
</template>

<script lang="ts" setup>
import { VsfRating } from '@storefront-ui/vue';
</script>
