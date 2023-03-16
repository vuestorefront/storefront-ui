<template>
  <div class="flex flex-col gap-4 flex-wrap sm:flex-row">
    <VsfProgressLinear :value="30" class="w-12" size="xs" />
    <VsfProgressLinear :value="30" class="w-12" size="sm" />
    <VsfProgressLinear :value="30" class="w-12" size="base" />
    <VsfProgressLinear :value="30" class="w-12" />
    <VsfProgressLinear :value="30" class="w-12" size="lg" />
    <VsfProgressLinear :value="30" class="w-12" size="xl" />
    <VsfProgressLinear :value="30" class="w-12" size="2xl" />
    <VsfProgressLinear :value="30" class="w-12" size="3xl" />
    <VsfProgressLinear :value="30" class="w-12" size="4xl" />
  </div>
</template>

<script lang="ts" setup>
import { VsfProgressLinear } from '@storefront-ui/vue';
</script>
