<template>
  <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
    <div class="relative">
      <VsfLink href="#">
        <img
          :src="card"
          alt="Great product"
          class="block object-cover h-auto rounded-md aspect-square"
          :width="300"
          :height="300"
        />
      </VsfLink>
      <VsfButton
        type="button"
        variant="tertiary"
        size="sm"
        square
        class="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
        aria-label="Add to wishlist"
      >
        <VsfIconFavorite size="sm" />
      </VsfButton>
    </div>
    <div class="p-4 border-t border-neutral-200">
      <VsfLink href="#" variant="secondary" class="no-underline"> The standard chunk of Lorem Ipsum </VsfLink>
      <div class="flex items-center pt-1">
        <VsfRating size="xs" :value="5" :max="5" />

        <VsfLink href="#" variant="secondary" class="pl-1 no-underline">
          <VsfCounter>123</VsfCounter>
        </VsfLink>
      </div>
      <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
        There are many variations of passages of Lorem Ipsum available
      </p>
      <span class="block pb-2 font-bold typography-text-lg">$2345,99</span>
      <VsfButton type="button" size="sm">
        <template #prefix>
          <VsfIconShoppingCart size="sm" />
        </template>
        Add to cart
      </VsfButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VsfRating, VsfCounter, VsfLink, VsfButton, VsfIconShoppingCart, VsfIconFavorite } from '@storefront-ui/vue';

import card from '@assets/card.png';
</script>
