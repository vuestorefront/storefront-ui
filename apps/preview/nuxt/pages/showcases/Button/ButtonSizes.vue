<template>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <SfButton type="button" size="sm">Hello</SfButton>

    <SfButton type="button">Hello</SfButton>

    <SfButton type="button" size="lg">Hello</SfButton>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';
</script>
