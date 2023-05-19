<template>
  <ul>
    <li class="flex items-center mb-2">
      <div class="relative">
        <SfIconCircle class="text-neutral-300" size="lg" />
        <SfBadge variant="dot" placement="bottom-right" class="!bg-primary-600 outline outline-white" />
      </div>
      <p class="ml-2 font-bold">John Doe</p>
    </li>
    <li class="flex items-center">
      <div class="relative">
        <SfIconCircle class="text-neutral-300" size="lg" />
        <SfBadge variant="dot" placement="bottom-right" class="!bg-neutral-600 outline outline-white" />
      </div>
      <p class="ml-2">Jane Doe</p>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { SfBadge, SfIconCircle } from '@storefront-ui/vue';
</script>
