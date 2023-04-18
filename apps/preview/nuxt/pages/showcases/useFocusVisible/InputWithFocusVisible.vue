<template>
  <div>
    <label class="inline-block m-2">
      <span>Default focus visible</span>
      <input class="block bg-gray-100 p-2 rounded-md focus:outline-none focus-visible:ring-2" />
    </label>
    <label class="inline-block m-2">
      <span>Custom focus visible</span>
      <input
        :class="['block bg-gray-100 p-2 rounded-md focus:outline-none', { 'focus-visible:ring-2': isFocusVisible }]"
      />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { useFocusVisible } from '@storefront-ui/vue';
const { isFocusVisible } = useFocusVisible({ isTextInput: true });
</script>
