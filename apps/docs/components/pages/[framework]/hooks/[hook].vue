<script setup lang="ts">
definePageMeta({
  documentDriven: false,
});

const route = useRoute();
</script>

<template>
  <NuxtLayout name="fullscreen">
    <ContentDoc :path="`/_hooks/${route.params.hook}`" />
  </NuxtLayout>
</template>
