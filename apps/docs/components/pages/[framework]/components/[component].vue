<script setup lang="ts">
definePageMeta({
  documentDriven: false,
});

const route = useRoute();
</script>

<template>
  <NuxtLayout name="fullscreen">
    <ContentDoc :path="`/_components/${route.params.component}`" />
  </NuxtLayout>
</template>
