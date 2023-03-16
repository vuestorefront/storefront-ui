<template>
  <div class="flex flex-col gap-4">
    <VsfProgressLinear size="lg" :value="value" class="w-24" :aria-label="`${value}%`" />
    <label class="inline-flex items-center gap-2">
      <VsfProgressLinear class="w-24" size="lg" :value="value" />
      <span class="font-medium text-lg">{{ value }}%</span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfProgressLinear } from '@storefront-ui/vue';

const value = ref(70);
</script>
