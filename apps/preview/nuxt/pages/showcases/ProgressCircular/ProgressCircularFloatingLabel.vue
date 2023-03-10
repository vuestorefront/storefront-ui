<template>
  <div class="flex gap-4 flex-wrap">
    <VsfProgressCircular size="2xl" :value="value">
      <text class="font-medium" text-anchor="middle" alignment-baseline="central" x="100%" y="100%">
        {{ value }}%
      </text>
    </VsfProgressCircular>
    <VsfProgressCircular size="3xl" :value="value">
      <text class="font-medium fill-neutral-400" text-anchor="middle" alignment-baseline="central" x="100%" y="100%">
        {{ value }}%
      </text>
    </VsfProgressCircular>
    <VsfProgressCircular size="3xl" :value="value">
      <text class="font-medium text-2xs" text-anchor="middle" alignment-baseline="central" x="100%" y="100%">
        {{ value }}%
      </text>
    </VsfProgressCircular>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfProgressCircular } from '@storefront-ui/vue/components/VsfProgressCircular/index';

const value = ref(70);
</script>
