<script setup lang="ts">
const { selectedFramework } = useFramework();
</script>
<template>
  <div>
    <ContentSlot v-if="selectedFramework.name.toLowerCase() === 'vue'" :use="$slots.default" />
  </div>
</template>
