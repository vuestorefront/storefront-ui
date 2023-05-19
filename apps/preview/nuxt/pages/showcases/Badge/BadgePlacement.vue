<template>
  <div class="flex gap-3">
    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="content" placement="top-right" />
    </SfButton>

    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="content" placement="bottom-right" />
    </SfButton>

    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="content" placement="top-left" />
    </SfButton>

    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="content" placement="bottom-left" />
    </SfButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfBadge, SfButton, SfIconShoppingCart } from '@storefront-ui/vue';

const content = ref(7);
</script>
