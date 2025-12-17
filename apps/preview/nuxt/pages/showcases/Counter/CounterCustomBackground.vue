<template>
  <div class="flex items-center gap-4 md:flex-row">
    <SfCounter pill class="text-neutral-900 bg-primary-100 ring-neutral-200"> 123 </SfCounter>
    <SfCounter pill class="text-neutral-900 bg-positive-100 ring-neutral-200"> 123 </SfCounter>
    <SfCounter pill class="text-neutral-900 bg-negative-100 ring-neutral-200"> 123 </SfCounter>
    <SfCounter pill class="text-neutral-900 bg-warning-100 ring-neutral-200"> 123 </SfCounter>
    <SfCounter pill class="text-white bg-secondary-700 ring-white"> 123 </SfCounter>
  </div>
</template>
<script lang="ts" setup>
import { SfCounter } from '@storefront-ui/vue';
</script>
