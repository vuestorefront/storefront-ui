<template>
  <VsfInput>
    <template #prefix><VsfIconSearch /></template>
    <template #suffix><VsfIconLock /></template>
  </VsfInput>
</template>
<script lang="ts" setup>
import { VsfInput } from '@storefront-ui/vue/components/VsfInput/index';
import { VsfIconSearch, VsfIconLock } from '@storefront-ui/vue/components/VsfIcons/index';
</script>
