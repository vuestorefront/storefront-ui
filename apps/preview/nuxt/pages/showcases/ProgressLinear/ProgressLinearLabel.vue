<template>
  <div class="flex flex-col gap-4">
    <SfProgressLinear size="lg" :value="value" class="w-24" :aria-label="`${value}%`" />
    <label class="inline-flex items-center gap-2">
      <SfProgressLinear class="w-24" size="lg" :value="value" />
      <span class="font-medium text-lg">{{ value }}%</span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfProgressLinear } from '@storefront-ui/vue';

const value = ref(70);
</script>
