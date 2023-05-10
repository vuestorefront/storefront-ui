<template>
  <div class="relative max-h-[600px] flex flex-col h-full gap-1">
    <SfScrollable
      class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      :active-index="activeIndex"
      wrapper-class="h-full group/scrollable"
      is-active-index-centered
      :previous-disabled="activeIndex === 0"
      :next-disabled="activeIndex === images.length - 1"
      buttons-placement="block"
      @on-prev="activeIndex -= 1"
      @on-next="activeIndex += 1"
    >
      <template #previousButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          :disabled="activeIndex === 0"
          class="absolute hidden group-hover/scrollable:block disabled:!hidden !rounded-full !p-3 z-10 top-1/2 left-4 bg-white"
          variant="secondary"
          size="lg"
          square
        >
          <SfIconChevronLeft />
        </SfButton>
      </template>
      <div
        v-for="({ imageSrc, alt }, index) in images"
        :key="`${alt}-${index}`"
        class="relative flex justify-center basis-full snap-center snap-always shrink-0 grow"
      >
        <img
          class="object-cover w-auto h-full"
          :aria-label="alt"
          :aria-hidden="activeIndex !== index"
          :alt="alt"
          :src="imageSrc"
          draggable="false"
        />
      </div>
      <template #nextButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          :disabled="activeIndex === images.length - 1"
          class="absolute hidden group-hover/scrollable:block disabled:!hidden !rounded-full !p-3 z-10 top-1/2 right-4 bg-white"
          variant="secondary"
          size="lg"
          square
        >
          <SfIconChevronRight />
        </SfButton>
      </template>
    </SfScrollable>
    <div class="flex-shrink-0 basis-auto">
      <div
        class="flex-row w-full flex gap-0.5 mt [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <button
          v-for="({ alt }, index) in images"
          :key="`${index}-bullet`"
          :aria-current="activeIndex === index"
          :aria-label="alt"
          :class="[
            'w-full relative mt-1 border-b-4 transition-colors focus-visible:outline focus-visible:outline-offset-0 pointer-events-none',
            activeIndex === index ? 'border-primary-700' : 'border-gray-200',
          ]"
          @click="activeIndex = index"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/vue';
import { ref } from 'vue';
import * as Images from './images';

const images = [
  { imageSrc: Images.gallery1Src, alt: 'backpack1' },
  { imageSrc: Images.gallery2Src, alt: 'backpack2' },
  { imageSrc: Images.gallery3Src, alt: 'backpack3' },
  { imageSrc: Images.gallery4Src, alt: 'backpack4' },
  { imageSrc: Images.gallery5Src, alt: 'backpack5' },
  { imageSrc: Images.gallery6Src, alt: 'backpack6' },
  { imageSrc: Images.gallery7Src, alt: 'backpack7' },
  { imageSrc: Images.gallery8Src, alt: 'backpack8' },
  { imageSrc: Images.gallery9Src, alt: 'backpack9' },
  { imageSrc: Images.gallery10Src, alt: 'backpack10' },
  { imageSrc: Images.gallery11Src, alt: 'backpack11' },
];

const activeIndex = ref(0);
</script>
