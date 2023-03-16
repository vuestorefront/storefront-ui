<template>
  <div class="space-x-4">
    <VsfLink :tag="NuxtLink" to=""> NuxtLink </VsfLink>
  </div>
</template>

<script lang="ts" setup>
import { resolveComponent } from 'vue';
import { VsfLink } from '@storefront-ui/vue';

const NuxtLink = resolveComponent('NuxtLink');
</script>
