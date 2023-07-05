<template>
  <SfButton ref="buttonRef" type="button" @click="open">To Checkout</SfButton>
  <SfModal
    v-model="isOpen"
    class="max-w-[90%] md:max-w-lg"
    tag="section"
    role="alertdialog"
    aria-labelledby="promoModalTitle"
    aria-describedby="promoModalDesc"
  >
    <header>
      <SfButton square variant="tertiary" class="absolute right-2 top-2" @click="close">
        <SfIconClose />
      </SfButton>
      <h3 id="promoModalTitle" class="font-bold typography-headline-4 md:typography-headline-3">
        You might miss out on great deals
      </h3>
    </header>
    <p id="promoModalDesc" class="mt-2">
      There are special offers for some of the items on your wishlist. Do you want to see these deals before proceeding
      to checkout page?
    </p>
    <footer class="flex justify-end gap-4 mt-4">
      <SfButton type="button" variant="secondary" @click="close">Skip</SfButton>
      <SfButton type="button" @click="close">Yes!</SfButton>
    </footer>
  </SfModal>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { SfModal, SfButton, SfIconClose, useDisclosure } from '@storefront-ui/vue';
import { useFocus } from '@vueuse/core';

const buttonRef = ref();
const { focused } = useFocus(buttonRef);
const { isOpen, open, close } = useDisclosure();
watch(isOpen, (open) => {
  focused.value = !open;
});
</script>
