<template>
  <div class="relative flex flex-col h-full gap-1 scroll-smooth">
    <div
      ref="draggableRef"
      class="after:block after:pt-[100%] flex-1 relative overflow-hidden w-full cursor-grab active:cursor-grabbing touch-pan-y max-h-[600px]"
      @mousedown="pointerHandler"
      @touchstart="pointerHandler"
    >
      <div
        class="absolute top-0 left-0 flex w-full h-full transition-transform snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] will-change-transform"
        :style="`transform: translate3d(${imgPosition * -100}%, 0, 0) `"
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
    <div class="flex-shrink-0 overflow-hidden basis-auto">
      <div
        class="flex-row w-full snap-both snap-mandatory flex gap-0.5 mt overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        <div
          v-for="({ alt }, index) in thumbImages"
          :key="`${alt}-${index}-thumbnail`"
          :aria-label="alt"
          :class="[
            'w-[78px] relative pb-1 border-b-4 snap-start cursor-pointer transition-colors',
            activeIndex === index ? 'border-primary-700' : 'border-gray-200',
          ]"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { clamp } from '@storefront-ui/shared';

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

const imgPosition = activeIndex.value + offsetPosition.value;

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
