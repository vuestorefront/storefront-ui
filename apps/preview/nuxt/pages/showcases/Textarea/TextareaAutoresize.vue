<template>
  <label>
    <span class="typography-text-sm font-medium">Description</span>
    <SfTextarea ref="textareaRef" class="w-full h-max-[500px] block" />
  </label>
  <p class="typography-hint-xs text-neutral-500 mt-0.5">Do not include personal or financial information.</p>
</template>

<script setup lang="ts">
import { SfTextarea } from '@storefront-ui/vue';
import { attach } from '@frsource/autoresize-textarea';
import { ref, onMounted } from 'vue';
import { unrefElement } from '@vueuse/core';

const textareaRef = ref();
onMounted(() => {
  attach(unrefElement(textareaRef));
});
</script>
