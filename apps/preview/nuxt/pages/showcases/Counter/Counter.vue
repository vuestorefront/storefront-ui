<template>
  <div class="flex items-center gap-2 md:flex-row">
    <SfCounter size="3xs">123</SfCounter>
    <SfCounter size="2xs">123</SfCounter>
    <SfCounter size="xs">123</SfCounter>
    <SfCounter size="sm">123</SfCounter>
    <SfCounter>123</SfCounter>
    <SfCounter size="lg">123</SfCounter>
  </div>
</template>
<script lang="ts" setup>
import { SfCounter } from '@storefront-ui/vue';
</script>
