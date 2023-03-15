<template>
  <section class="md:max-w-[640px]">
    <div
      class="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-2 mb-2"
    >
      <VsfIconSell size="sm" class="mr-1.5" />
      Sale
    </div>
    <h1 class="typography-headline-3 font-bold">Athletic Mens Walking Sneakers Athletic Shoes Breathable Knit</h1>
    <div class="flex items-baseline py-2">
      <strong class="typography-headline-3 font-bold text-secondary-600">$2,345.99</strong>
      <span class="ml-2 text-base font-normal leading-4 text-neutral-500 line-through">$3,129.99</span>
    </div>
    <div class="inline-flex items-end mb-2">
      <VsfRating size="xs" :value="3" :max="5" />
      <VsfCounter class="ml-1">123</VsfCounter>
      <VsfLink href="#" variant="secondary" class="text-xs ml-2"> 123 reviews </VsfLink>
    </div>
    <div class="text-sm mb-4">
      <p>Stretch mesh upper for breathability. Lightweight.</p>
      <p>Non slip.</p>
      <p>Flexible outsole.</p>
      <p>Easy to wear on and off.</p>
    </div>
    <!-- TODO: Place QuantitySelector when ready -->
    <div class="border-y border-gray-200 py-4 mb-4">
      <VsfButton type="button" size="lg" class="w-full">
        <template #prefix>
          <VsfIconShoppingCart size="sm" />
        </template>
        Add to cart
      </VsfButton>
      <div class="flex justify-center mt-4">
        <VsfButton type="button" size="sm" variant="tertiary">
          <template #prefix>
            <VsfIconCompareArrows size="sm" />
          </template>
          Compare
        </VsfButton>
        <VsfButton type="button" size="sm" variant="tertiary">
          <VsfIconFavorite size="sm" />
          Add to list
        </VsfButton>
      </div>
    </div>
    <div class="flex first:mt-4">
      <VsfIconPackage size="sm" class="text-neutral-500 mr-1 flex-shrink-0" />
      <p class="text-sm">
        Free shipping, arrives by Thu, Apr 7. Want it faster?
        <VsfLink href="#" variant="secondary" class="mx-1"> Add an address </VsfLink>
        to see options
      </p>
    </div>
    <div class="flex mt-4">
      <VsfIconWarehouse size="sm" class="text-neutral-500 mr-1 flex-shrink-0" />
      <p class="text-sm">
        Pickup not available at your shop.
        <VsfLink href="#" variant="secondary" class="ml-1"> Check availability nearby </VsfLink>
      </p>
    </div>
    <div class="flex mt-4">
      <VsfIconSafetyCheck size="sm" class="text-neutral-500 mr-1 flex-shrink-0" />
      <p class="text-sm">
        Free 30-days returns.
        <VsfLink href="#" variant="secondary" class="ml-1"> Details </VsfLink>
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  VsfIconSafetyCheck,
  VsfIconCompareArrows,
  VsfIconWarehouse,
  VsfIconPackage,
  VsfIconFavorite,
  VsfIconSell,
} from '@storefront-ui/vue/components/VsfIcons/index';
import { VsfButton } from '@storefront-ui/vue/components/VsfButton/index';
import { VsfCounter } from '@storefront-ui/vue/components/VsfCounter/index';
import { VsfLink } from '@storefront-ui/vue/components/VsfLink/index';
import { VsfRating } from '@storefront-ui/vue/components/VsfRating/index';
</script>
