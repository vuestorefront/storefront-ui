<template>
  <SfDropdown v-model="isOpen">
    <template #trigger>
      <SfButton @click="toggle()">Toggle</SfButton>
    </template>
    <ul class="p-2 rounded bg-gray-100">
      <li>More</li>
      <li>About</li>
      <li>Settings</li>
    </ul>
  </SfDropdown>
</template>

<script lang="ts" setup>
import { SfDropdown, useDisclosure, SfButton } from '@storefront-ui/vue';

const { isOpen, toggle } = useDisclosure();
</script>
