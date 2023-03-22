<template>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <VsfButton type="button" size="sm">Hello</VsfButton>

    <VsfButton type="button">Hello</VsfButton>

    <VsfButton type="button" size="lg">Hello</VsfButton>
  </div>
</template>

<script lang="ts" setup>
import { VsfButton } from '@storefront-ui/vue';
</script>
