<script lang="ts" setup>
import { inject } from 'vue';

const invalid = inject('invalid');
</script>

<template>
  <p v-if="invalid" class="text-negative-700 typography-error-sm">
    <slot />
  </p>
</template>
