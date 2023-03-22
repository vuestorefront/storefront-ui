<template>
  <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
    <div class="relative">
      <SfLink href="#">
        <img
          :src="productImage"
          alt="Great product"
          class="block object-cover h-auto rounded-md aspect-square"
          :width="300"
          :height="300"
        />
      </SfLink>
      <SfButton
        type="button"
        variant="tertiary"
        size="sm"
        square
        class="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
        aria-label="Add to wishlist"
      >
        <SfIconFavorite size="sm" />
      </SfButton>
    </div>
    <div class="p-4 border-t border-neutral-200">
      <SfLink href="#" variant="secondary" class="no-underline"> Athletic mens walking sneakers </SfLink>
      <div class="flex items-center pt-1">
        <SfRating size="xs" :value="5" :max="5" />

        <SfLink href="#" variant="secondary" class="pl-1 no-underline">
          <SfCounter>123</SfCounter>
        </SfLink>
      </div>
      <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
        Lightweight • Non slip • Flexible outsole • Easy to wear on and off
      </p>
      <span class="block pb-2 font-bold typography-text-lg">$2345,99</span>
      <SfButton type="button" size="sm">
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        Add to cart
      </SfButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfRating, SfCounter, SfLink, SfButton, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/vue';

import productImage from '@assets/sneakers.png';
</script>
