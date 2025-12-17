<template>
  <SfDropdown v-model="isOpen" @update:model-value="onToggle">
    <template #trigger>
      <SfButton ref="triggerRef" @click="toggle()">Toggle</SfButton>
    </template>
    <ul class="p-2 rounded-sm bg-gray-100">
      <li tabIndex="0">More</li>
      <li tabIndex="0">About</li>
      <li tabIndex="0">Settings</li>
    </ul>
  </SfDropdown>
</template>

<script lang="ts" setup>
import { SfDropdown, useDisclosure, SfButton } from '@storefront-ui/vue';
import { templateRef, unrefElement } from '@vueuse/core';

const { isOpen, toggle } = useDisclosure();
const triggerRef = templateRef('triggerRef');

const onToggle = (isOpen: boolean) => {
  if (!isOpen) {
    unrefElement(triggerRef.value)?.focus();
  }
};
</script>
