<template>
  <div class="flex gap-4 flex-wrap">
    <VsfProgressCircular class="!text-cyan-700" :value="70" size="3xl" />
    <VsfProgressCircular size="3xl" :value="70" />
    <VsfProgressCircular class="!ring-yellow-200" :value="70" size="3xl" />
  </div>
</template>

<script lang="ts" setup>
import { VsfProgressCircular } from '@storefront-ui/vue/components/VsfProgressCircular/index';
</script>
