<template>
  <label>
    <span className="text-sm font-medium">Description</span>
    <SfTextarea ref="textareaRef" class="w-full h-max-[500px]" />
  </label>
  <div className="flex justify-between">
    <div>
      <p className="text-xs text-disabled-500 mt-0.5">Do not include personal or financial information.</p>
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
