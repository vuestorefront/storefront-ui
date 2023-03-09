<template>
  <VsfThumbnail size="xl">
    <img :src="card" alt="Thumbnail avatar" />
  </VsfThumbnail>
</template>

<script lang="ts" setup>
import { VsfThumbnail } from '@storefront-ui/vue/components/VsfThumbnail/index';
import card from '@assets/card.png';
</script>
