<template>
  <div class="relative flex flex-col h-full gap-1 scroll-smooth">
    <SfScrollable
      class="group/scrollable items-center w-full max-h-[700px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      :active-index="activeIndex"
      is-active-index-centered
      :previous-disabled="activeIndex === 0"
      :next-disabled="activeIndex === itemsLength - 1"
      buttons-placement="floating"
      @on-prev="
        ({ preventDefault }) => {
          preventDefault();
          activeIndex -= 1;
        }
      "
      @on-next="
        ({ preventDefault }) => {
          preventDefault();
          activeIndex += 1;
        }
      "
    >
      <template #previousButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          :disabled="activeIndex === 0"
          class="hidden group-hover/scrollable:block absolute !rounded-full !p-3 z-10 top-1/2 left-4 bg-white"
          variant="secondary"
          size="lg"
          square
        >
          <SfIconChevronLeft />
        </SfButton>
      </template>
      <div
        class="flex w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] will-change-transform"
      >
        <div
          v-for="({ image, alt }, index) in images"
          :key="`${alt}-${index}`"
          class="relative basis-full snap-center snap-always shrink-0 grow"
        >
          <img class="object-contain w-full h-full" :alt="alt" :src="image" draggable="false" />
        </div>
      </div>
      <template #nextButton="defaultProps">
        <SfButton
          v-bind="defaultProps"
          :disabled="activeIndex === itemsLength - 1"
          class="hidden group-hover/scrollable:block absolute !rounded-full !p-3 z-10 top-1/2 right-4 bg-white"
          variant="secondary"
          size="lg"
          square
        >
          <SfIconChevronRight />
        </SfButton>
      </template>
    </SfScrollable>
    <div class="flex-shrink-0 overflow-hidden basis-auto">
      <div
        class="flex-row w-full flex gap-0.5 mt overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        <div
          v-for="(item, index) in images"
          :key="`${index}-bullet`"
          :class="[
            'w-[78px] relative pb-1 border-b-4 snap-start transition-colors',
            activeIndex === index ? 'border-primary-700' : 'border-gray-200',
          ]"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfScrollable, SfButton, SfIconChevronLeft, SfIconChevronRight } from '@storefront-ui/vue';
import { ref } from 'vue';
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

const activeIndex = ref(0);
const itemsLength = images.length;
</script>
