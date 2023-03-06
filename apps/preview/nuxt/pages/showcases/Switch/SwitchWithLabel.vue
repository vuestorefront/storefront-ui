<template>
  <label class="flex items-center">
    <VsfSwitch v-model="modelCheck" value="value" />
    <span class="text-gray-900 font-body text-base cursor-pointer ml-3">Label</span>
  </label>
  <span class="text-xs mt-0.5 ml-12 text-gray-500">Help text</span>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfSwitch } from '@storefront-ui/vue/components/VsfSwitch/index';

const modelCheck = ref(true);
</script>
