<template>
  <VsfThumbnail size="xl">
    <img :src="card" alt="Thumbnail avatar" />
  </VsfThumbnail>
</template>

<script lang="ts" setup>
import card from '@assets/card.png';
import { VsfThumbnail } from '@storefront-ui/vue';
</script>
