<template>
  <SfButton class="absolute right-1/2 top-1/2 translate-x-[50%]" @click="open"> Open rating modal again </SfButton>
  <SfModal
    v-model="isOpen"
    class="min-w-[376px] md:w-[480px]"
    tag="section"
    role="alertdialog"
    :aria-labelledby="modalTitleId"
    :aria-describedby="modalDescId"
  >
    <header>
      <SfButton
        square
        variant="tertiary"
        aria-label="Close product rating modal"
        size="sm"
        class="!text-neutral-500 absolute right-2 top-2"
        @click="close"
      >
        <SfIconClose size="sm" />
      </SfButton>
      <h3 :id="modalTitleId" class="font-bold typography-headline-4 md:typography-headline-3 mb-8">
        Rate your purchase
      </h3>
    </header>
    <img
      src="http://localhost:3100/@assets/smartwatch.png"
      alt="Smartwatch"
      width="100"
      height="100"
      class="mx-auto border border-neutral-200 rounded-md"
    />
    <p :id="modalDescId" class="mt-2 text-center">Smartwatch Fitness Tracker</p>
    <form class="mt-6">
      <SfRatingButton v-model="modelValue" aria-label="Select rating" size="lg" class="justify-center mb-8" />
      <SfButton type="submit" class="w-full">Rate Product</SfButton>
    </form>
  </SfModal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfModal, SfButton, SfIconClose, useDisclosure, SfRatingButton, useId } from '@storefront-ui/vue';

const { isOpen, open, close } = useDisclosure({ initialValue: true });
const modelValue = ref();
const modalTitleId = useId();
const modalDescId = useId();
</script>
