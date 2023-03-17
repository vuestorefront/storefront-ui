<template>
  <VsfButton type="button" @click="open">To Checkout</VsfButton>

  <VsfModal
    v-model="isOpen"
    class="max-w-[90%] md:max-w-lg"
    tag="section"
    role="alertdialog"
    aria-labelledby="promoModalTitle"
    aria-describedby="promoModalDesc"
  >
    <header>
      <VsfButton square variant="tertiary" class="absolute right-2 top-2" @click="close">
        <VsfIconClose />
      </VsfButton>
      <h3 id="promoModalTitle" class="typography-headline-4 md:typography-headline-3 font-bold">
        You might miss out on great deals
      </h3>
    </header>
    <p id="promoModalDesc" class="mt-2">
      There are special offers for some of the items on your wishlist. Do you want to see these deals before proceeding
      to checkout page?
    </p>
    <footer class="mt-4 flex justify-end gap-4">
      <VsfButton type="button" variant="secondary" @click="close">Skip</VsfButton>
      <VsfButton type="button" @click="close">Yes!</VsfButton>
    </footer>
  </VsfModal>
</template>

<script lang="ts" setup>
import { VsfModal, VsfButton, VsfIconClose, useDisclosure } from '@storefront-ui/vue';

const { isOpen, open, close } = useDisclosure({ initialValue: false });
</script>
