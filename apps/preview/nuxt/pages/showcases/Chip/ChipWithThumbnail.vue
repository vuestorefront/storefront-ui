<template>
  <VsfChip v-model="chipRedActive" size="sm" class="mr-2">
    <template #prefix><VsfThumbnail class="bg-red-500" size="sm" /></template>
    Red
  </VsfChip>
  <VsfChip v-model="chipBlueActive">
    <template #prefix><VsfThumbnail class="bg-blue-500" size="base" /></template>
    Blue
  </VsfChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfChip, VsfThumbnail } from '@storefront-ui/vue';

const chipRedActive = ref();
const chipBlueActive = ref();
</script>
