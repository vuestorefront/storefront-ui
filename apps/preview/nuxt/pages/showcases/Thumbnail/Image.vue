<template>
  <SfThumbnail size="xl">
    <img :src="card" alt="Thumbnail avatar" />
  </SfThumbnail>
</template>

<script lang="ts" setup>
import card from '@assets/card.png';
import { SfThumbnail } from '@storefront-ui/vue';
</script>
