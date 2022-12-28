<script lang="ts" setup>
import { PropType, ref, toRef, defineAsyncComponent } from 'vue';
import { VsfSliderNavigation, VsfSliderScrollbar } from './types';
import { VsfButtonVariants, VsfButtonSizes } from '../VsfButton';
import { Options } from '@sfui/shared/slider';
import { useSlider } from './slider';
const VsfButton = defineAsyncComponent(() => import('../VsfButton/VsfButton.vue'));
const VsfIconChevronLeft = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronLeft.vue'));
const VsfIconChevronRight = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronRight.vue'));

const props = defineProps({
  scrollbar: {
    type: String as PropType<VsfSliderScrollbar>,
    default: null,
  },
  navigation: {
    type: String as PropType<VsfSliderNavigation>,
    default: null,
  },
  scrollSnap: {
    type: Boolean,
    default: false,
  },
  draggable: {
    type: Object as PropType<{ sensitivity: number }>,
    default: null,
  },
});

const hasPrev = ref(false);
const hasNext = ref(false);
const draggable = toRef(props, 'draggable');

const options = ref<Partial<Options>>({
  reduceMotion: typeof window !== 'undefined' && window?.matchMedia('(prefers-reduced-motion: reduce)').matches,
  drag: draggable.value,
  onScroll: ({ hasPrev: prev, hasNext: next }) => {
    hasPrev.value = prev;
    hasNext.value = next;
  },
});

const [container, slider] = useSlider(options);

function onClickPrev() {
  return slider.value?.prev();
}
function onClickNext() {
  return slider.value?.next();
}
// TODO: showMobileNavigation does not exists
</script>

<template>
  <div
    :class="[
      'vsf-slider',
      {
        'vsf-slider--floating-nav': navigation === VsfSliderNavigation.floating,
        'vsf-slider--mobile-nav': showMobileNavigation,
        'vsf-slider--snap-scroll': scrollSnap,
      },
    ]"
  >
    <div v-if="navigation" class="vsf-slider__nav vsf-slider__nav-prev">
      <slot name="prev-arrow" v-bind="{ onClick: onClickPrev, hasPrev }">
        <VsfButton
          :variant="VsfButtonVariants.secondary"
          :size="VsfButtonSizes.lg"
          rounded
          :class="['vsf-slider__nav-arrow', { 'vsf-slider__nav-arrow--hidden': !hasPrev }]"
          :disabled="!hasPrev"
          @click="onClickPrev"
        >
          <template #prefix><VsfIconChevronLeft /></template>
        </VsfButton>
      </slot>
    </div>

    <div
      ref="container"
      :class="[
        'vsf-slider__container',
        {
          'scrollbar-hidden': !scrollbar,
          'vsf-slider__container--scroll': scrollbar === VsfSliderScrollbar.always,
        },
      ]"
    >
      <slot></slot>
    </div>

    <div v-if="navigation" class="vsf-slider__nav vsf-slider__nav-next">
      <slot name="next-arrow" v-bind="{ onClick: onClickNext, hasNext }">
        <VsfButton
          :variant="VsfButtonVariants.secondary"
          :size="VsfButtonSizes.lg"
          rounded
          :class="['vsf-slider__nav-arrow', { 'vsf-slider__nav-arrow--hidden': !hasNext }]"
          :disabled="!hasNext"
          @click="onClickNext"
        >
          <template #prefix><VsfIconChevronRight /></template>
        </VsfButton>
      </slot>
    </div>
  </div>
</template>
