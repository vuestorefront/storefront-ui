<template>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <SfButton tag="a" href="/"> Link </SfButton>

    <SfButton :tag="NuxtLink" to="/"> NuxtLink </SfButton>

    <SfButton tag="router-link" to="/"> router-link </SfButton>
  </div>
</template>

<script lang="ts" setup>
import { resolveComponent } from 'vue';
import { SfButton } from '@storefront-ui/vue';

const NuxtLink = resolveComponent('NuxtLink');
</script>
