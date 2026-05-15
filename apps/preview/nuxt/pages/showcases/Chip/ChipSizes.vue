<template>
  <SfChip size="sm" class="mr-2" v-model="chipSmallActive"> Small </SfChip>
  <SfChip size="base" class="mr-2" v-model="chipBaseActive"> Base </SfChip>
  <SfChip size="base" v-model="chipDefaultActive"> Default </SfChip>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfChip } from '@storefront-ui/vue';

const chipSmallActive = ref();
const chipBaseActive = ref();
const chipDefaultActive = ref();
</script>
