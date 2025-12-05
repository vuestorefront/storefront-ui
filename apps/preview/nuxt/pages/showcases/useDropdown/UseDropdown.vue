<template>
  <div ref="referenceRef" class="w-max">
    <SfButton ref="triggerRef" @click="isOpen = !isOpen">Toggle</SfButton>
    <ul v-if="isOpen" ref="floatingRef" :style="style" class="absolute p-2 w-max rounded-sm bg-gray-100">
      <li tabIndex="0">More</li>
      <li tabIndex="0">About</li>
      <li tabIndex="0">Settings</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useDropdown, SfButton } from '@storefront-ui/vue';
import { templateRef, unrefElement } from '@vueuse/core';

const isOpen = ref(false);
const triggerRef = templateRef('triggerRef');

const close = () => {
  isOpen.value = false;
  unrefElement(triggerRef.value)?.focus();
};

const { referenceRef, floatingRef, style } = useDropdown({ isOpen, onClose: close });
</script>
