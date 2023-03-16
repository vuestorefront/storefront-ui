<template>
  <div class="flex flex-col gap-2 medium:flex-row">
    <VsfCounter size="xs"> 123 </VsfCounter>
    <VsfCounter size="sm"> 123 </VsfCounter>
    <VsfCounter size="base"> 123 </VsfCounter>
    <VsfCounter size="lg"> 123 </VsfCounter>
    <VsfCounter size="xl"> 123 </VsfCounter>
    <VsfCounter size="2xl"> 123 </VsfCounter>
  </div>
</template>
<script lang="ts" setup>
import { VsfCounter } from '@storefront-ui/vue';
</script>
