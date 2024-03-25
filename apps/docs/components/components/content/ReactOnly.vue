<script setup lang="ts">
const { frameworks, selectedFramework, framework, setFramework } = useFramework();
</script>
<template>
  <div>
    <ContentSlot v-if="selectedFramework.name.toLowerCase() === 'react'" :use="$slots.default" />
  </div>
</template>
