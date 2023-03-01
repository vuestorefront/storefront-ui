<template>
  <div class="flex items-center space-x-4">
    <VsfButton>
      <template #prefix>
        <VsfIconHome />
      </template>
      Home
    </VsfButton>

    <VsfButton>
      <template #suffix>
        <VsfIconStar />
      </template>
      Hello
    </VsfButton>

    <VsfButton type="button" :square="true" aria-label="Add to cart">
      <VsfIconAdd />
    </VsfButton>
  </div>
</template>

<script lang="ts" setup>
import { VsfButton } from '@storefront-ui/vue/components/VsfButton/index';
import { VsfIconHome, VsfIconStar, VsfIconAdd } from '@storefront-ui/vue/components/VsfIcons/index';
</script>
