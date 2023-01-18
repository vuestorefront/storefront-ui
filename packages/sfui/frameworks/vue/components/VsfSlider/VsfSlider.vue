<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref, toRefs, defineAsyncComponent, computed } from 'vue';
import { isReduceMotionEnabled } from '@storefront-ui/shared';
import { VsfSliderNavigation, VsfSliderScrollbar, VsfSliderDirection } from './types';
import { VsfButtonVariant, VsfButtonSize } from '../VsfButton';
import { useSlider } from './slider';
const VsfButton = defineAsyncComponent(() => import('../VsfButton/VsfButton.vue'));
const VsfIconChevronLeft = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronLeft.vue'));
const VsfIconChevronRight = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronRight.vue'));
const VsfIconChevronUp = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronUp.vue'));
const VsfIconChevronDown = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronDown.vue'));

const props = defineProps({
  scrollbar: {
    type: String as PropType<`${VsfSliderScrollbar}`>,
    default: VsfSliderScrollbar.hidden,
  },
  navigation: {
    type: String as PropType<`${VsfSliderNavigation}`>,
    default: VsfSliderNavigation.block,
  },
  direction: {
    type: String as PropType<`${VsfSliderDirection}`>,
    default: VsfSliderDirection.horizontal,
  },
  scrollSnap: {
    type: Boolean,
    default: false,
  },
  draggable: {
    type: Object as PropType<
      | {
          sensitivity: number;
        }
      | undefined
    >,
    default: undefined,
  },
});
const { draggable, direction } = toRefs(props);
const hasPrev = ref();
const hasNext = ref();

const isHorizontal = computed(() => direction.value === VsfSliderDirection.horizontal);
const [container, slider] = useSlider(
  computed(() => ({
    reduceMotion: isReduceMotionEnabled,
    drag: draggable?.value,
    vertical: !isHorizontal.value,
    onScroll: ({ hasPrev: prev, hasNext: next }) => {
      hasPrev.value = prev;
      hasNext.value = next;
    },
  })),
);
const onClickPrev = () => slider.value?.prev();
const onClickNext = () => slider.value?.next();
</script>

<template>
  <div
    :class="[
      'vsf-slider',
      `vsf-slider--${direction}`,
      {
        'vsf-slider--floating-nav': navigation === VsfSliderNavigation.floating,
        'vsf-slider--snap-scroll': scrollSnap,
      },
    ]"
  >
    <div v-if="navigation !== VsfSliderNavigation.none" class="vsf-slider__nav vsf-slider__nav-prev">
      <slot name="prev-button" v-bind="{ onClick: onClickPrev, hasPrev }">
        <VsfButton
          :variant="VsfButtonVariant.secondary"
          :size="VsfButtonSize.lg"
          rounded
          :class="['vsf-slider__nav-arrow', { 'vsf-slider__nav-arrow--hidden': !hasPrev }]"
          :disabled="!hasPrev"
          @click="onClickPrev"
        >
          <template #prefix>
            <VsfIconChevronLeft v-if="isHorizontal" />
            <VsfIconChevronUp v-else />
          </template>
        </VsfButton>
      </slot>
    </div>
    <div
      ref="container"
      :class="[
        'vsf-slider__container',
        scrollbar !== VsfSliderScrollbar.hidden && `vsf-slider__container--scroll-${scrollbar}`,
      ]"
    >
      <slot />
    </div>
    <div v-if="navigation !== VsfSliderNavigation.none" class="vsf-slider__nav vsf-slider__nav-next">
      <slot name="next-button" v-bind="{ onClick: onClickNext, hasNext }">
        <VsfButton
          :variant="VsfButtonVariant.secondary"
          :size="VsfButtonSize.lg"
          rounded
          :class="['vsf-slider__nav-arrow', { 'vsf-slider__nav-arrow--hidden': !hasNext }]"
          :disabled="!hasNext"
          @click="onClickNext"
        >
          <template #prefix>
            <VsfIconChevronRight v-if="isHorizontal" />
            <VsfIconChevronDown v-else />
          </template>
        </VsfButton>
      </slot>
    </div>
  </div>
</template>
