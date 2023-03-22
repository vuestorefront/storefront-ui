<template>
  <button
    v-for="componentName in componentsNames"
    :key="componentName"
    type="button"
    class="inline-block border cursor-pointer"
    :data-tooltip="componentName"
    @click="copyToClipboard(componentName)"
  >
    <component :is="SfIcons[componentName]" />
  </button>

  <p v-if="copied" class="mt-1 text-sm">&quot;{{ copied }}&quot; has been copied to clipboard</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as SfIcons from '@storefront-ui/vue';

const componentsNames = Object.keys(SfIcons).filter(
  (exportName): exportName is keyof typeof SfIcons => exportName !== 'SfIconSize' && exportName.includes('SfIcon'),
);
const copied = ref('');
const copyToClipboard = (componentName: string) => {
  navigator.clipboard.writeText(componentName);
  copied.value = componentName;
  setTimeout(() => {
    copied.value = '';
  }, 1000);
};
</script>
