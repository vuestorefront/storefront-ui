<template>
  <div class="flex gap-4 flex-wrap">
    <SfLoaderLinear class="w-12 !text-cyan-700" size="lg" />
    <SfLoaderLinear class="w-12" size="lg" />
    <SfLoaderLinear class="w-12 !bg-yellow-200" size="lg" />
  </div>
</template>

<script lang="ts" setup>
import { SfLoaderLinear } from '@storefront-ui/vue';
</script>
