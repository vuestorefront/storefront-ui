<template>
  <div class="flex flex-col">
    <VsfRating class="!text-red-600" :value="4" />
    <VsfRating class="!text-purple-500" :value="4" />
    <VsfRating class="!text-cyan-700" :value="4" />
  </div>
</template>

<script lang="ts" setup>
import { VsfRating } from '@storefront-ui/vue';
</script>
