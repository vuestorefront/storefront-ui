<script setup lang="ts">
definePageMeta({
  documentDriven: false,
});
</script>

<template>
  <NuxtLayout name="fullscreen">
    <ProseH1>AI Assistant</ProseH1>
    <div class="custom-block">
    <iframe
      src="https://chat.fwdoperators.com/?cid=3fd362f4-2a88-4d27-b2d7-d067265b0280"
      style="width: 100%; min-height: 90vh; border: none; margin-top: 20px;"
      allow="clipboard-write"
    />
    </div>
  </NuxtLayout>
</template>
