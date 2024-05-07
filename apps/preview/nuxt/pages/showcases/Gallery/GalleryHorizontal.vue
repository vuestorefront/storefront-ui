<template>
  <div class="relative flex flex-col w-full max-h-[600px] aspect-[4/3]">
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
        class="flex justify-center h-full basis-full shrink-0 grow snap-center snap-always"
      >
        <img :aria-label="alt" :aria-hidden="activeIndex !== index" class="w-auto h-full" :alt="alt" :src="imageSrc" />
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
          <SfIconChevronLeft size="sm" />
        </SfButton>
      </template>
      <button
        v-for="({ imageThumbSrc, alt }, index) in images"
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
        <img :alt="alt" class="object-contain border border-neutral-200" width="78" height="78" :src="imageThumbSrc" />
      </button>
      <template #nextButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          class="absolute disabled:hidden !rounded-full z-10 right-4 bg-white"
          variant="secondary"
          size="sm"
          square
        >
          <SfIconChevronRight size="sm" />
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

const withBase = (filepath: string) => `http://localhost:3100/@assets/gallery/${filepath}`;

const images = [
  { imageSrc: withBase('gallery_1.png'), imageThumbSrc: withBase('gallery_1_thumb.png'), alt: 'backpack1' },
  { imageSrc: withBase('gallery_2.png'), imageThumbSrc: withBase('gallery_2_thumb.png'), alt: 'backpack2' },
  { imageSrc: withBase('gallery_3.png'), imageThumbSrc: withBase('gallery_3_thumb.png'), alt: 'backpack3' },
  { imageSrc: withBase('gallery_4.png'), imageThumbSrc: withBase('gallery_4_thumb.png'), alt: 'backpack4' },
  { imageSrc: withBase('gallery_5.png'), imageThumbSrc: withBase('gallery_5_thumb.png'), alt: 'backpack5' },
  { imageSrc: withBase('gallery_6.png'), imageThumbSrc: withBase('gallery_6_thumb.png'), alt: 'backpack6' },
  { imageSrc: withBase('gallery_7.png'), imageThumbSrc: withBase('gallery_7_thumb.png'), alt: 'backpack7' },
  { imageSrc: withBase('gallery_8.png'), imageThumbSrc: withBase('gallery_8_thumb.png'), alt: 'backpack8' },
  { imageSrc: withBase('gallery_9.png'), imageThumbSrc: withBase('gallery_9_thumb.png'), alt: 'backpack9' },
  { imageSrc: withBase('gallery_10.png'), imageThumbSrc: withBase('gallery_10_thumb.png'), alt: 'backpack10' },
  { imageSrc: withBase('gallery_11.png'), imageThumbSrc: withBase('gallery_11_thumb.png'), alt: 'backpack11' },
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
