<template>
  <SfScrollable class="items-center w-full snap-x snap-mandatory" drag>
    <div
      v-for="(_, index) in Array.from({ length: 20 })"
      :key="index"
      class="flex items-center justify-center text-gray-500 border border-dashed w-36 h-36 shrink-0 bg-neutral-100 border-negative-300 snap-center"
    >
      {{ index + 1 }}
    </div>
  </SfScrollable>
</template>

<script lang="ts" setup>
import { SfScrollable } from '@storefront-ui/vue';
</script>
