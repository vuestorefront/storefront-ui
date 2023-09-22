<template>
  <div class="flex flex-col gap-4">
    <Alert variant="neutral" class="w-full max-w-[640px] shadow-md">
      <p class="py-2">Happy shopping!</p>
    </Alert>

    <Alert variant="neutral" class="w-full max-w-[320px] shadow-md" size="sm">
      <p class="py-2">Happy shopping!</p>
    </Alert>
  </div>
</template>

<script lang="ts" setup>
import Alert from './Alert.vue';
</script>
