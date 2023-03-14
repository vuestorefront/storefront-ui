<template>
  <VsfChip v-model="chipRedActive" size="sm" class="mr-2">
    <VsfThumbnail class="bg-red-500" size="sm" />
    <span class="ml-2">Red</span>
  </VsfChip>
  <VsfChip v-model="chipBlueActive">
    <VsfThumbnail class="bg-blue-500" size="base" />
    <span class="ml-2">Blue</span>
  </VsfChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfChip } from '@storefront-ui/vue/components/VsfChip/index';
import { VsfThumbnail } from '@storefront-ui/vue/components/VsfThumbnail/index';

const chipRedActive = ref();
const chipBlueActive = ref();
</script>
