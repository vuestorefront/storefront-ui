<script lang="ts" setup>
defineProps({
  value: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <option :value="value" class="vsf-select__option">
    <slot />
  </option>
</template>
