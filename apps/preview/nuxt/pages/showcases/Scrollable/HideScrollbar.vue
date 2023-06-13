<template>
  <SfScrollable
    class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
  >
    <div
      v-for="(_, index) in Array.from({ length: 20 })"
      :key="index"
      class="flex items-center justify-center text-gray-500 border border-dashed w-36 h-36 shrink-0 bg-neutral-100 border-negative-300"
    >
      {{ index + 1 }}
    </div>
  </SfScrollable>
</template>

<script lang="ts" setup>
import { SfScrollable } from '@storefront-ui/vue';
</script>
