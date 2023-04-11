<template>
  <div class="md:shadow-lg md:rounded-md md:border md:border-neutral-100">
    <div class="flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4">
      <p class="typography-headline-4 font-bold md:typography-headline-3">Order summary</p>
      <p class="typography-text-base font-semibold">(Items: {{ orderDetails.items }})</p>
    </div>
    <div class="px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0">
      <div class="flex justify-between typography-text-base pb-4">
        <div class="flex flex-col grow pr-2">
          <p>Items Subtotal</p>
          <p class="ml-auto typography-text-xs text-neutral-500">Original Price</p>
          <p class="ml-auto typography-text-xs text-secondary-700">Savings</p>
          <p class="my-2">Delivery</p>
          <p>Estimated Sales Tax</p>
        </div>
        <div class="flex flex-col text-right">
          <p>{{ formatPrice(itemsSubtotal) }}</p>
          <p class="typography-text-xs text-neutral-500">{{ formatPrice(orderDetails.originalPrice) }}</p>
          <p class="typography-text-xs text-secondary-700">{{ formatPrice(orderDetails.savings) }}</p>
          <p class="my-2">{{ formatPrice(orderDetails.delivery) }}</p>
          <p>{{ formatPrice(orderDetails.tax) }}</p>
        </div>
      </div>
      <div v-if="promoCode" class="flex items-center py-4 border-t border-neutral-200">
        <p>PromoCode</p>
        <SfButton size="sm" variant="tertiary" class="ml-auto mr-2" @click="removePromoCode">Remove</SfButton>
        <p>{{ formatPrice(promoCode) }}</p>
      </div>
      <div class="flex gap-x-2 py-4 border-y border-neutral-200 mb-4">
        <SfInput v-model="inputValue" placeholder="Enter promo code" wrapper-class="grow" />
        <SfButton variant="secondary" @click="checkPromoCode">Apply</SfButton>
      </div>
      <p class="px-3 py-1.5 bg-secondary-100 text-secondary-700 typography-text-sm rounded-md text-center mb-4">
        You are saving ${{ Math.abs(orderDetails.savings).toFixed(2) }} on your order today!
      </p>
      <div
        class="flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4 border-b border-neutral-200"
      >
        <p>Total</p>
        <p>{{ formatPrice(totalPrice) }}</p>
      </div>
      <SfButton size="lg" class="w-full"> Place order and pay </SfButton>
      <div class="typography-text-sm mt-4 text-center">
        By placing my order, you agree to our <SfLink href="/">Terms and Conditions</SfLink> and our
        <SfLink href="/">Privacy Policy.</SfLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { SfButton, SfInput, SfLink } from '@storefront-ui/vue';

const inputValue = ref('');

const orderDetails = {
  items: 3,
  originalPrice: 7824.97,
  savings: -787.0,
  delivery: 0.0,
  tax: 457.47,
};

const promoCode = ref(0);

const itemsSubtotal = computed(
  () => orderDetails.originalPrice + orderDetails.savings + orderDetails.delivery + orderDetails.tax,
);

const totalPrice = computed(() => itemsSubtotal.value + promoCode.value);

const checkPromoCode = () => {
  return inputValue.value.toUpperCase() === 'VSF2020'
    ? (promoCode.value = -100)
    : alert('Your promo code is not valid');
};

const removePromoCode = () => (promoCode.value = 0);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
};
</script>
