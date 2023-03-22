<template>
  <label class="flex items-center mb-4 cursor-pointer">
    <SfRadio v-model="radioModel" value="value-1" name="radio" />
    <span class="ml-2 text-base font-normal leading-6 font-body">Label</span>
  </label>
  <label class="flex items-center justify-between max-w-xs cursor-pointer">
    <span class="ml-2 text-base font-normal leading-6 font-body">Label</span>
    <SfRadio v-model="radioModel" value="value-1" name="radio" />
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRadio } from '@storefront-ui/vue';

const radioModel = ref('');
</script>
