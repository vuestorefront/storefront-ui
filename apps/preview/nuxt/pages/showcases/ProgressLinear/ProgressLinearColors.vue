<template>
  <div class="flex gap-4 flex-wrap">
    <VsfProgressLinear class="w-12 !text-cyan-700" :value="60" size="lg" />
    <VsfProgressLinear class="w-12" size="lg" :value="60" />
    <VsfProgressLinear class="w-12 !bg-yellow-200" :value="60" size="lg" />
  </div>
</template>

<script lang="ts" setup>
import { VsfProgressLinear } from '@storefront-ui/vue';
</script>
