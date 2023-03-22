<template>
  <div class="flex flex-col">
    <SfRating class="!text-red-600" :value="4" />
    <SfRating class="!text-purple-500" :value="4" />
    <SfRating class="!text-cyan-700" :value="4" />
  </div>
</template>

<script lang="ts" setup>
import { SfRating } from '@storefront-ui/vue';
</script>
