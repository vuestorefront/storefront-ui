<template>
  <div class="flex gap-3">
    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="content" />
    </SfButton>

    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="maxContent" />
    </SfButton>

    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge variant="dot" />
    </SfButton>

    <SfButton class="relative" square variant="tertiary">
      <SfIconShoppingCart />
      <SfBadge :content="textContent" />
    </SfButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfBadge, SfButton, SfIconShoppingCart } from '@storefront-ui/vue';

const content = ref(10);
const maxContent = ref(10000);
const textContent = ref('NEW');
</script>
