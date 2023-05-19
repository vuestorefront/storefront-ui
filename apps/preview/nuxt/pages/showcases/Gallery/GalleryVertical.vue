<template>
  <div class="relative flex w-full max-h-[600px] aspect-[4/3]">
    <SfScrollable
      ref="thumbsRef"
      class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      direction="vertical"
      :active-index="activeIndex"
      :previous-disabled="activeIndex === 0"
      :next-disabled="activeIndex === images.length - 1"
      buttons-placement="floating"
    >
      <template #previousButton="defaultProps">
        <SfButton
          v-if="!firstThumbVisible"
          v-bind="defaultProps"
          :disabled="activeIndex === 0"
          class="absolute !rounded-full z-10 top-4 rotate-90 bg-white"
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
        :ref="(el) => assignRef(el, index)"
        type="button"
        :aria-label="alt"
        :aria-current="activeIndex === index"
        :class="`md:w-[78px] md:h-auto relative shrink-0 pb-1 mx-4 -mb-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0  ${
          activeIndex === index ? 'border-primary-700' : 'border-transparent'
        }`"
        @mouseover="activeIndex = index"
        @focus="activeIndex = index"
      >
        <img :alt="alt" class="border border-neutral-200" width="78" height="78" :src="imageThumbSrc" />
      </button>
      <template #nextButton="defaultProps">
        <SfButton
          v-if="!lastThumbVisible"
          v-bind="defaultProps"
          :disabled="activeIndex === images.length"
          class="absolute !rounded-full z-10 bottom-4 rotate-90 bg-white"
          variant="secondary"
          size="sm"
          square
        >
          <SfIconChevronRight size="sm" />
        </SfButton>
      </template>
    </SfScrollable>
    <SfScrollable
      class="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      :active-index="activeIndex"
      direction="vertical"
      wrapper-class="h-full m-auto"
      is-active-index-centered
      buttons-placement="none"
      :drag="{ containerWidth: true }"
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
import { unrefElement, useIntersectionObserver } from '@vueuse/core';
import { watch, type ComponentPublicInstance } from 'vue';

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
const thumbsRef = ref<HTMLElement>();
const firstThumbRef = ref<HTMLButtonElement>();
const lastThumbRef = ref<HTMLButtonElement>();
const firstThumbVisible = ref(false);
const lastThumbVisible = ref(false);
const activeIndex = ref(0);

watch(
  thumbsRef,
  (thumbsRef) => {
    if (thumbsRef) {
      useIntersectionObserver(
        firstThumbRef,
        ([{ isIntersecting }]) => {
          firstThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsRef),
          rootMargin: '0px',
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

watch(
  thumbsRef,
  (thumbsRef) => {
    if (thumbsRef) {
      useIntersectionObserver(
        lastThumbRef,
        ([{ isIntersecting }]) => {
          lastThumbVisible.value = isIntersecting;
        },
        {
          root: unrefElement(thumbsRef),
          rootMargin: '0px',
          threshold: 1,
        },
      );
    }
  },
  { immediate: true },
);

const onDragged = (event: SfScrollableOnDragEndData) => {
  if (event.swipeRight && activeIndex.value > 0) {
    activeIndex.value -= 1;
  } else if (event.swipeLeft && activeIndex.value < images.length - 1) {
    activeIndex.value += 1;
  }
};

const assignRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (!el) return;
  if (index === thumbImages.length - 1) {
    lastThumbRef.value = el as HTMLButtonElement;
  } else if (index === 0) {
    firstThumbRef.value = el as HTMLButtonElement;
  }
};
</script>
