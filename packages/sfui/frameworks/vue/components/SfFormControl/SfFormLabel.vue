<script lang="ts" setup>
import { inject } from 'vue';

const fieldId = inject<string>('fieldId');
const disabled = inject<boolean>('disabled');
</script>

<template>
  <label :for="fieldId" :class="['typography-label', disabled && 'text-disabled-500']">
    <slot />
  </label>
</template>
