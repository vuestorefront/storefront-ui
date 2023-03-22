<template>
  <div class="flex gap-4 flex-wrap">
    <SfProgressCircular size="2xl" :value="value">
      <text class="font-medium" text-anchor="middle" alignment-baseline="central" x="100%" y="100%">
        {{ value }}%
      </text>
    </SfProgressCircular>
    <SfProgressCircular size="3xl" :value="value">
      <text class="font-medium fill-neutral-400" text-anchor="middle" alignment-baseline="central" x="100%" y="100%">
        {{ value }}%
      </text>
    </SfProgressCircular>
    <SfProgressCircular size="3xl" :value="value">
      <text class="font-medium text-2xs" text-anchor="middle" alignment-baseline="central" x="100%" y="100%">
        {{ value }}%
      </text>
    </SfProgressCircular>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfProgressCircular } from '@storefront-ui/vue';

const value = ref(70);
</script>
