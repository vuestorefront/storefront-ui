<script lang="ts" setup>
import { PropType, ref, toRef } from 'vue';
import { VsfSliderNavigation, VsfSliderScrollbar } from './types';
import VsfButton from '../VsfButton/VsfButton.vue';
import { VsfIconChevronLeft, VsfIconChevronRight } from '../VsfIcons/index';
import { useSlider } from '../../shared/slider/vue';
import type { Options } from '../../shared/slider';
import { VsfButtonVariants } from '../VsfButton';

const props = defineProps({
  scrollbar: {
    type: String as PropType<VsfSliderScrollbar>,
    default: null,
  },
  navigation: {
    type: String as PropType<VsfSliderNavigation>,
    default: null,
  },
  showMobileNavigation: {
    type: Boolean,
    default: false,
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
    <VsfButton
      v-if="navigation"
      :variant="VsfButtonVariants.secondary"
      icon
      rounded
      :class="['vsf-slider__nav vsf-slider__nav-prev', { 'vsf-slider__nav--hidden': !hasPrev }]"
      @click="() => slider?.prev()"
    >
      <VsfIconChevronLeft />
    </VsfButton>

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

    <VsfButton
      v-if="navigation"
      :variant="VsfButtonVariants.secondary"
      icon
      rounded
      :class="['vsf-slider__nav vsf-slider__nav-next', { 'vsf-slider__nav--hidden': !hasNext }]"
      @click="() => slider?.next()"
    >
      <VsfIconChevronRight />
    </VsfButton>
  </div>
</template>
