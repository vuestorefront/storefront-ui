<template>
  <SfChip v-model="chipSmallActive" size="sm" class="mr-2"> Small </SfChip>
  <SfChip v-model="chipBaseActive" size="base" class="mr-2"> Base </SfChip>
  <SfChip v-model="chipDefaultActive" size="base"> Default </SfChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfChip } from '@storefront-ui/vue';

const chipSmallActive = ref();
const chipBaseActive = ref();
const chipDefaultActive = ref();
</script>
