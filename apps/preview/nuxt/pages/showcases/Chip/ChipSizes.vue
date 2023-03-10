<template>
  <VsfChip v-model="chipSmallActive" size="sm" class="mr-2"> Small </VsfChip>
  <VsfChip v-model="chipBaseActive" size="base" class="mr-2"> Base </VsfChip>
  <VsfChip v-model="chipDefaultActive" size="base"> Default </VsfChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfChip } from '@storefront-ui/vue/components/VsfChip/index';

const chipSmallActive = ref();
const chipBaseActive = ref();
const chipDefaultActive = ref();
</script>
