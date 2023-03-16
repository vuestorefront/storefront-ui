<template>
  <label class="flex justify-between items-center">
    <span class="text-gray-900 font-body text-base cursor-pointer">Label</span>
    <VsfSwitch v-model="modelCheck" value="value" />
  </label>
  <span class="text-xs mt-0.5 text-gray-500">Help text</span>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfSwitch } from '@storefront-ui/vue';

const modelCheck = ref(true);
</script>
