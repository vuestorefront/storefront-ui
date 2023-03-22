<template>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <SfButton type="button" :variant="SfButtonVariant.primary"> Hello </SfButton>

    <SfButton type="button" :variant="SfButtonVariant.secondary"> Hello </SfButton>

    <SfButton type="button" :variant="SfButtonVariant.tertiary"> Hello </SfButton>
  </div>
</template>

<script lang="ts" setup>
import { SfButton, SfButtonVariant } from '@storefront-ui/vue';
</script>
