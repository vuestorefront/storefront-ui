<template>
  <div class="relative max-h-[700px] flex flex-col h-full md:flex-row scroll-smooth md:gap-4">
    <div
      ref="draggableRef"
      class="after:block after:pt-[100%] flex-1 relative overflow-hidden w-full cursor-grab active:cursor-grabbing touch-pan-y max-h-[600px]"
      @pointerDown="pointerHandler"
    >
      <div
        class="absolute top-0 left-0 flex w-full h-full transition-transform snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] will-change-transform"
        :style="`transform: translate3d(${imgPosition * -100}%,0,0)`"
      >
        <div
          v-for="({ image, alt }, index) in images"
          :key="`${alt}-${index}`"
          class="relative snap-center snap-always basis-full shrink-0 grow"
        >
          <img class="object-contain" :alt="alt" :src="image" draggable="false" />
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 overflow-hidden md:-order-1 basis-auto">
      <SfScrollable
        class="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        direction="vertical"
        :active-index="activeIndex"
        :is-active-index-centered="false"
        :previous-disabled="activeIndex === 0"
        :next-disabled="activeIndex === itemsLength - 1"
        buttons-placement="floating"
      >
        <template #previousButton>
          <SfButton
            :disabled="activeIndex === 0"
            class="absolute !rounded-full z-10 top-4 rotate-90"
            variant="secondary"
            size="sm"
            square
            @click="getPrevButtonProps.onClick"
          >
            <SfIconChevronLeft />
          </SfButton>
        </template>
        <button
          v-for="({ image, alt }, index) in thumbImages"
          :key="`${alt}-${index}-thumbnail`"
          type="button"
          :aria-label="alt"
          :class="`md:w-[78px] md:h-auto relative shrink-0 pb-1 border-b-4 snap-start cursor-pointer transition-colors flex-grow md:flex-grow-0  ${
            activeIndex === index ? 'border-primary-700' : 'border-transparent'
          }`"
          @mouseover="activeIndex = index"
          @focus="activeIndex = index"
        >
          <img :alt="alt" class="object-contain border border-neutral-200" width="78" height="78" :src="image" />
        </button>
        <template #nextButton>
          <SfButton
            :disabled="activeIndex === itemsLength - 1"
            class="absolute !rounded-full z-10 bottom-4 rotate-90"
            variant="secondary"
            size="sm"
            square
            @click="getNextButtonProps.onClick"
          >
            <SfIconChevronRight />
          </SfButton>
        </template>
      </SfScrollable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { clamp } from '@storefront-ui/shared';
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight, useScrollable } from '@storefront-ui/vue';
import gallery1 from '@assets/gallery_1.png';
import gallery2 from '@assets/gallery_2.png';
import gallery3 from '@assets/gallery_3.png';
import gallery4 from '@assets/gallery_4.png';
import gallery5 from '@assets/gallery_5.png';
import gallery6 from '@assets/gallery_6.png';
import gallery7 from '@assets/gallery_7.png';
import gallery8 from '@assets/gallery_8.png';
import gallery9 from '@assets/gallery_9.png';
import gallery10 from '@assets/gallery_10.png';
import gallery1_thumb from '@assets/gallery_1_thumb.png';
import gallery2_thumb from '@assets/gallery_2_thumb.png';
import gallery3_thumb from '@assets/gallery_3_thumb.png';
import gallery4_thumb from '@assets/gallery_4_thumb.png';
import gallery5_thumb from '@assets/gallery_5_thumb.png';
import gallery6_thumb from '@assets/gallery_6_thumb.png';
import gallery7_thumb from '@assets/gallery_7_thumb.png';
import gallery8_thumb from '@assets/gallery_8_thumb.png';
import gallery9_thumb from '@assets/gallery_9_thumb.png';
import gallery10_thumb from '@assets/gallery_10_thumb.png';

const images = [
  { image: gallery1, alt: 'backpack' },
  { image: gallery2, alt: 'backpack' },
  { image: gallery3, alt: 'backpack' },
  { image: gallery4, alt: 'backpack' },
  { image: gallery5, alt: 'backpack' },
  { image: gallery6, alt: 'backpack' },
  { image: gallery7, alt: 'backpack' },
  { image: gallery8, alt: 'backpack' },
  { image: gallery9, alt: 'backpack' },
  { image: gallery10, alt: 'backpack' },
];

const thumbImages = [
  { image: gallery1_thumb, alt: 'backpack' },
  { image: gallery2_thumb, alt: 'backpack' },
  { image: gallery3_thumb, alt: 'backpack' },
  { image: gallery4_thumb, alt: 'backpack' },
  { image: gallery5_thumb, alt: 'backpack' },
  { image: gallery6_thumb, alt: 'backpack' },
  { image: gallery7_thumb, alt: 'backpack' },
  { image: gallery8_thumb, alt: 'backpack' },
  { image: gallery9_thumb, alt: 'backpack' },
  { image: gallery10_thumb, alt: 'backpack' },
];

const draggableRef = ref<HTMLElement>();
const offsetPosition = ref(0);
const activeIndex = ref(0);
const isDragging = ref(false);
const itemsLength = thumbImages.length;

const imgPosition = activeIndex.value + offsetPosition.value;
const { getNextButtonProps, getPrevButtonProps } = useScrollable();

const pointerHandler = (e: PointerEvent<HTMLDivElement>) => {
  e.preventDefault();
  if (!draggableRef.value) {
    return;
  }
  draggableRef.value.setPointerCapture(e.pointerId);
  const pointerDownOffset = computed(() => e.nativeEvent.offsetX);
  isDragging.value = true;
  const rect = draggableRef.value.getBoundingClientRect();
  const pointerEventMethod = (event: PointerEvent) => {
    offsetPosition.value = pointerDownOffset.value - event.offsetX / rect.width / 5;
  };
  draggableRef.value.addEventListener('pointermove', pointerEventMethod, { passive: false });
  draggableRef.value.addEventListener('pointerup', () => {
    isDragging.value = false;
    draggableRef.value?.removeEventListener('pointermove', pointerEventMethod);
  });
};

watch(isDragging, () => {
  if (!isDragging.value) {
    const stopVal = offsetPosition.value > 0 ? Math.ceil(imgPosition) : Math.floor(imgPosition);
    activeIndex.value = clamp(stopVal, 0, images.length - 1);
    offsetPosition.value = 0;
  }
});
</script>
