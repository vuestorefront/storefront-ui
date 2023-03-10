<template>
  <div class="flex gap-4 flex-wrap">
    <VsfLoaderLinear class="w-12 !text-cyan-700" size="lg" />
    <VsfLoaderLinear class="w-12" size="lg" />
    <VsfLoaderLinear class="w-12 !bg-yellow-200" size="lg" />
  </div>
</template>

<script lang="ts" setup>
import { VsfLoaderLinear } from '@storefront-ui/vue/components/VsfLoaderLinear/index';
</script>
