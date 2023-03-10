<template>
  <VsfChip v-model="chipRedActive" size="sm" square class="mr-2">
    <!-- TODO: Replace with Thumbnail component when ready -->
    <VsfThumbnail class="bg-red-500" size="sm" aria-label="Red thumbnail chip" />
  </VsfChip>
  <VsfChip v-model="chipBlueActive" square>
    <!-- TODO: Replace with Thumbnail component when ready -->
    <VsfThumbnail class="bg-blue-500" color="blue" size="base" aria-label="Blue thumbnail chip" />
  </VsfChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfChip } from '@storefront-ui/vue/components/VsfChip/index';
import { VsfThumbnail } from '@storefront-ui/vue/components/VsfThumbnail/index';

const chipRedActive = ref();
const chipBlueActive = ref();
</script>
