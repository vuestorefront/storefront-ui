<template>
  <SfChip v-model="chipRedActive" size="sm" class="mr-2">
    <template #prefix><SfThumbnail class="bg-red-500" size="sm" /></template>
    Red
  </SfChip>
  <SfChip v-model="chipBlueActive">
    <template #prefix><SfThumbnail class="bg-secondary-400" size="base" /></template>
    Blue
  </SfChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfChip, SfThumbnail } from '@storefront-ui/vue';

const chipRedActive = ref();
const chipBlueActive = ref();
</script>
