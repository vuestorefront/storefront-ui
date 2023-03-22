<template>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <VsfButton type="button" :size="VsfButtonSize.sm"> Hello </VsfButton>

    <VsfButton type="button" :size="VsfButtonSize.base"> Hello </VsfButton>

    <VsfButton type="button" :size="VsfButtonSize.lg"> Hello </VsfButton>
  </div>
</template>

<script lang="ts" setup>
import { VsfButton, VsfButtonSize } from '@storefront-ui/vue';
</script>
