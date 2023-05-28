<template>
  <div class="flex gap-3">
    <div class="p-3 bg-white">
      <SfButton class="group relative" square variant="tertiary">
        <SfIconShoppingCart />
        <SfBadge
          :content="content"
          :max="99"
          class="outline outline-white group-hover:outline-primary-100 group-active:outline-primary-200"
        />
      </SfButton>
    </div>

    <div class="p-3 bg-primary-700">
      <SfButton class="group relative hover:bg-primary-800 active:bg-primary-900" square variant="tertiary">
        <SfIconShoppingCart class="text-white" />
        <SfBadge
          :content="content"
          :max="99"
          class="outline outline-primary-700 bg-white !text-neutral-900 group-hover:outline-primary-800 group-active:outline-primary-900"
        />
      </SfButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfBadge, SfButton, SfIconShoppingCart } from '@storefront-ui/vue';

const content = ref(100);
</script>
