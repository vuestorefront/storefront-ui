<template>
  <div class="flex flex-col gap-4 flex-wrap sm:flex-row mr-6 mb-6">
    <VsfProgressCircular :value="30" size="xs" />
    <VsfProgressCircular :value="30" size="sm" />
    <VsfProgressCircular :value="30" size="base" />
    <VsfProgressCircular :value="30" />
    <VsfProgressCircular :value="30" size="lg" />
    <VsfProgressCircular :value="30" size="xl" />
    <VsfProgressCircular :value="30" size="2xl" />
    <VsfProgressCircular :value="30" size="3xl" />
    <VsfProgressCircular :value="30" size="4xl" />
  </div>
</template>

<script lang="ts" setup>
import { VsfProgressCircular } from '@storefront-ui/vue/components/VsfProgressCircular/index';
</script>
