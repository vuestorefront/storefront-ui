<template>
  <div class="flex gap-3">
    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="content" :max="99" placement="top-right" />
    </SfButton>

    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="content" :max="99" placement="bottom-right" />
    </SfButton>

    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="content" :max="99" placement="top-left" />
    </SfButton>

    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="content" :max="99" placement="bottom-left" />
    </SfButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfBadge, SfButton, SfIconShoppingCart } from '@storefront-ui/vue';

const content = ref(100);
</script>
