<template>
  <div class="flex flex-col gap-4 flex-wrap sm:flex-row">
    <VsfLoaderLinear class="w-12" />
    <VsfLoaderLinear class="w-12" size="minimal" />
    <VsfLoaderLinear class="w-12" size="xs" />
    <VsfLoaderLinear class="w-12" size="sm" />
    <VsfLoaderLinear class="w-12" size="base" />
    <VsfLoaderLinear class="w-12" size="lg" />
    <VsfLoaderLinear class="w-12" size="xl" />
    <VsfLoaderLinear class="w-12" size="2xl" />
    <VsfLoaderLinear class="w-12" size="3xl" />
    <VsfLoaderLinear class="w-12" size="4xl" />
  </div>
</template>

<script lang="ts" setup>
import { VsfLoaderLinear } from '@storefront-ui/vue/components/VsfLoaderLinear/index';
</script>
