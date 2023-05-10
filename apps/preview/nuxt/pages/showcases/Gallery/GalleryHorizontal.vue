<template>
  <div class="relative max-h-[600px] flex flex-col h-full">
    <SfScrollable
      class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      :active-index="activeIndex"
      wrapper-class="h-full min-h-0"
      buttons-placement="none"
      :drag="{ containerWidth: true }"
      is-active-index-centered
      @on-drag-end="onDragged"
    >
      <div
        v-for="({ imageSrc, alt }, index) in images"
        :key="`${alt}-${index}`"
        class="flex justify-center h-full basis-full shrink-0 grow snap-center"
      >
        <img
          :aria-label="alt"
          :aria-hidden="activeIndex !== index"
          class="object-cover w-auto h-full"
          :alt="alt"
          :src="imageSrc"
        />
      </div>
    </SfScrollable>
    <SfScrollable
      class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      :active-index="activeIndex"
      buttons-placement="floating"
    >
      <template #previousButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          class="absolute disabled:hidden !rounded-full z-10 left-4 bg-white"
          variant="secondary"
          size="sm"
          square
        >
          <SfIconChevronLeft />
        </SfButton>
      </template>
      <button
        v-for="({ imageSrc, alt }, index) in thumbImages"
        :key="`${alt}-${index}-thumbnail`"
        type="button"
        :aria-label="alt"
        :aria-current="activeIndex === index"
        :class="[
          'md:w-14 md:h-auto relative shrink-0 pb-1 my-4 -mr-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0',
          activeIndex === index ? 'border-primary-700' : 'border-transparent',
        ]"
        @click="activeIndex = index"
      >
        <img :alt="alt" class="object-contain border border-neutral-200" width="78" height="78" :src="imageSrc" />
      </button>
      <template #nextButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          class="absolute disabled:hidden !rounded-full z-10 right-4 bg-white"
          variant="secondary"
          size="sm"
          square
        >
          <SfIconChevronRight />
        </SfButton>
      </template>
    </SfScrollable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  SfScrollable,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  type SfScrollableOnDragEndData,
} from '@storefront-ui/vue';
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

const thumbImages = [
  { imageSrc: Images.gallery1ThumbSrc, alt: 'backpack1' },
  { imageSrc: Images.gallery2ThumbSrc, alt: 'backpack2' },
  { imageSrc: Images.gallery3ThumbSrc, alt: 'backpack3' },
  { imageSrc: Images.gallery4ThumbSrc, alt: 'backpack4' },
  { imageSrc: Images.gallery5ThumbSrc, alt: 'backpack5' },
  { imageSrc: Images.gallery6ThumbSrc, alt: 'backpack6' },
  { imageSrc: Images.gallery7ThumbSrc, alt: 'backpack7' },
  { imageSrc: Images.gallery8ThumbSrc, alt: 'backpack8' },
  { imageSrc: Images.gallery9ThumbSrc, alt: 'backpack9' },
  { imageSrc: Images.gallery10ThumbSrc, alt: 'backpack10' },
  { imageSrc: Images.gallery11ThumbSrc, alt: 'backpack11' },
];

const activeIndex = ref(0);

const onDragged = (event: SfScrollableOnDragEndData) => {
  if (event.swipeRight && activeIndex.value > 0) {
    activeIndex.value -= 1;
  } else if (event.swipeLeft && activeIndex.value < images.length - 1) {
    activeIndex.value += 1;
  }
};
</script>
