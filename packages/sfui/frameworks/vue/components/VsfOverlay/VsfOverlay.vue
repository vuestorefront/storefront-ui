<script lang="ts" setup>
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  absolute: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div v-if="visible" :class="['vsf-overlay' , {'vsf-overlay--absolute': absolute} ]" />
</template>
