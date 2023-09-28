<template>
  <label>
    <span class="typography-text-sm font-medium">Description</span>
    <SfTextarea ref="textareaRef" class="w-full h-max-[500px]" />
  </label>
  <div class="flex justify-between mt-0.5">
    <div>
      <p class="typography-text-xs text-neutral-500">Do not include personal or financial information.</p>
    </div>
  </div>
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
