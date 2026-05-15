<template>
  <SfChip size="sm" square class="mr-2" v-model="chipRedActive">
    <SfThumbnail class="bg-red-500" size="sm" aria-label="Red thumbnail chip" />
  </SfChip>
  <SfChip square v-model="chipBlueActive">
    <SfThumbnail class="bg-blue-500" color="blue" size="base" aria-label="Blue thumbnail chip" />
  </SfChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfChip, SfThumbnail } from '@storefront-ui/vue';

const chipRedActive = ref();
const chipBlueActive = ref();
</script>
