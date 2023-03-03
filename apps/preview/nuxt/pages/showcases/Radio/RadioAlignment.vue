<template>
  <label class="flex items-center mb-4 cursor-pointer">
    <VsfRadio v-model="radioModel" value="value-1" name="radio" />
    <span class="ml-2 text-base font-normal leading-6 font-body">Label</span>
  </label>
  <label class="flex items-center justify-between max-w-xs cursor-pointer">
    <span class="ml-2 text-base font-normal leading-6 font-body">Label</span>
    <VsfRadio v-model="radioModel" value="value-1" name="radio" />
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfRadio } from '@storefront-ui/vue/components/VsfRadio/index';

const radioModel = ref('');
</script>
