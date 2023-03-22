<template>
  <div class="flex flex-col items-center space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4">
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
import { VsfButton, VsfIconHome, VsfIconStar, VsfIconAdd } from '@storefront-ui/vue';
</script>
