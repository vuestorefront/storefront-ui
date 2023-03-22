<template>
  <div class="flex flex-col items-center space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4">
    <SfButton>
      <template #prefix>
        <SfIconHome />
      </template>
      Home
    </SfButton>

    <SfButton>
      <template #suffix>
        <SfIconStar />
      </template>
      Hello
    </SfButton>

    <SfButton type="button" :square="true" aria-label="Add to cart">
      <SfIconAdd />
    </SfButton>
  </div>
</template>

<script lang="ts" setup>
import { SfButton, SfIconHome, SfIconStar, SfIconAdd } from '@storefront-ui/vue';
</script>
