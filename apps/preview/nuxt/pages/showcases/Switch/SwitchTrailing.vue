<template>
  <label class="flex items-center justify-between">
    <span class="text-base text-gray-900 cursor-pointer font-body">Label</span>
    <SfSwitch v-model="modelCheck" value="value" />
  </label>
  <span class="text-xs mt-0.5 block text-gray-500">Help text</span>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfSwitch } from '@storefront-ui/vue';

const modelCheck = ref(false);
</script>
