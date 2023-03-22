<template>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <VsfButton type="button" :variant="VsfButtonVariant.primary"> Hello </VsfButton>

    <VsfButton type="button" :variant="VsfButtonVariant.secondary"> Hello </VsfButton>

    <VsfButton type="button" :variant="VsfButtonVariant.tertiary"> Hello </VsfButton>
  </div>
</template>

<script lang="ts" setup>
import { VsfButton, VsfButtonVariant } from '@storefront-ui/vue';
</script>
