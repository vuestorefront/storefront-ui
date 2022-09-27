<script lang="ts" setup>
const props = defineProps({
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
  <div v-if="visible" :class="['vsf-overlay', absolute ? 'absolute' : 'fixed']" />
</template>
