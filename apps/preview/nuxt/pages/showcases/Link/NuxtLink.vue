<template>
  <div class="space-x-4">
    <SfLink :tag="NuxtLink" to=""> NuxtLink </SfLink>
  </div>
</template>

<script lang="ts" setup>
import { resolveComponent } from 'vue';
import { SfLink } from '@storefront-ui/vue';

const NuxtLink = resolveComponent('NuxtLink');
</script>
