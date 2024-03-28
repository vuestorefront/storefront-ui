<script setup lang="ts">
definePageMeta({
  documentDriven: false,
});

const route = useRoute();
</script>

<template>
  <NuxtLayout name="fullscreen">
    <ContentDoc :path="`/_blocks/${route.params.block}`" />
  </NuxtLayout>
</template>
