<template>
  <section class="md:max-w-[640px]">
    <div
      class="inline-flex items-center justify-center text-sm font-medium text-white bg-secondary-600 py-1.5 px-2 mb-2"
    >
      <SfIconSell size="sm" class="mr-1.5" />
      Sale
    </div>
    <h1 class="font-bold typography-headline-3">Athletic Mens Walking Sneakers Athletic Shoes Breathable Knit</h1>
    <div class="flex items-baseline py-2">
      <strong class="font-bold typography-headline-3 text-secondary-600">$2,345.99</strong>
      <span class="ml-2 text-base font-normal leading-4 line-through text-neutral-500">$3,129.99</span>
    </div>
    <div class="inline-flex items-end mb-2">
      <SfRating size="xs" :value="3" :max="5" />
      <SfCounter class="ml-1" size="xs">123</SfCounter>
      <SfLink href="#" variant="secondary" class="ml-2 text-xs"> 123 reviews </SfLink>
    </div>
    <div class="mb-4 text-sm">
      <p>Stretch mesh upper for breathability. Lightweight.</p>
      <p>Non slip.</p>
      <p>Flexible outsole.</p>
      <p>Easy to wear on and off.</p>
    </div>
    <!-- TODO: Place QuantitySelector when ready -->
    <div class="py-4 mb-4 border-gray-200 border-y">
      <SfButton type="button" size="lg" class="w-full">
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        Add to cart
      </SfButton>
      <div class="flex justify-center mt-4">
        <SfButton type="button" size="sm" variant="tertiary">
          <template #prefix>
            <SfIconCompareArrows size="sm" />
          </template>
          Compare
        </SfButton>
        <SfButton type="button" size="sm" variant="tertiary">
          <SfIconFavorite size="sm" />
          Add to list
        </SfButton>
      </div>
    </div>
    <div class="flex first:mt-4">
      <SfIconPackage size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        Free shipping, arrives by Thu, Apr 7. Want it faster?
        <SfLink href="#" variant="secondary" class="mx-1"> Add an address </SfLink>
        to see options
      </p>
    </div>
    <div class="flex mt-4">
      <SfIconWarehouse size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        Pickup not available at your shop.
        <SfLink href="#" variant="secondary" class="ml-1"> Check availability nearby </SfLink>
      </p>
    </div>
    <div class="flex mt-4">
      <SfIconSafetyCheck size="sm" class="flex-shrink-0 mr-1 text-neutral-500" />
      <p class="text-sm">
        Free 30-days returns.
        <SfLink href="#" variant="secondary" class="ml-1"> Details </SfLink>
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  SfButton,
  SfCounter,
  SfLink,
  SfRating,
  SfIconSafetyCheck,
  SfIconCompareArrows,
  SfIconWarehouse,
  SfIconPackage,
  SfIconFavorite,
  SfIconSell,
  SfIconShoppingCart,
} from '@storefront-ui/vue';
</script>
