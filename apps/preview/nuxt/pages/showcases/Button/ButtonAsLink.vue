<template>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <VsfButton tag="a" href="/"> Link </VsfButton>

    <VsfButton :tag="NuxtLink" to="/"> NuxtLink </VsfButton>

    <VsfButton tag="router-link" to="/"> router-link </VsfButton>
  </div>
</template>

<script lang="ts" setup>
import { resolveComponent } from 'vue';
import { VsfButton } from '@storefront-ui/vue';

const NuxtLink = resolveComponent('NuxtLink');
</script>
