<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref, toRefs, defineAsyncComponent, computed } from 'vue';
import { isReduceMotionEnabled } from '@storefront-ui/shared';
import { useEventListener } from '@vueuse/core';
import { VsfScrollableNavigation, VsfScrollableScrollbar, VsfScrollableDirection } from './types';
import { VsfButtonVariant, VsfButtonSize } from '../VsfButton';
import { useScrollable } from './useScrollable';
import { useTrapFocus, InitialFocusType } from '../../shared/useTrapFocus/useTrapFocus';

const VsfButton = defineAsyncComponent(() => import('../VsfButton/VsfButton.vue'));
const VsfIconChevronLeft = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronLeft.vue'));
const VsfIconChevronRight = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronRight.vue'));
const VsfIconExpandLess = defineAsyncComponent(() => import('../VsfIcons/VsfIconExpandLess.vue'));
const VsfIconExpandMore = defineAsyncComponent(() => import('../VsfIcons/VsfIconExpandMore.vue'));

const props = defineProps({
  scrollbar: {
    type: String as PropType<`${VsfScrollableScrollbar}`>,
    default: VsfScrollableScrollbar.hidden,
  },
  navigation: {
    type: String as PropType<`${VsfScrollableNavigation}`>,
    default: VsfScrollableNavigation.block,
  },
  direction: {
    type: String as PropType<`${VsfScrollableDirection}`>,
    default: VsfScrollableDirection.horizontal,
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
  ariaLabelPrev: {
    type: String,
    default: 'Previous',
  },
  ariaLabelNext: {
    type: String,
    default: 'Next',
  },
});
const { draggable, direction } = toRefs(props);
const hasPrev = ref();
const hasNext = ref();

const isHorizontal = computed(() => direction.value === VsfScrollableDirection.horizontal);
const [containerRef, scrollable] = useScrollable(
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
const onClickPrev = () => scrollable.value?.prev();
const onClickNext = () => scrollable.value?.next();
const focusHandler = (event: FocusEvent) => {
  const groupElement = (event?.target as HTMLElement)?.closest('[data-group]');
  if (groupElement) {
    const groupElementIndex = Array.from(containerRef.value?.children as HTMLCollection).indexOf(groupElement);
    scrollable.value?.scrollToIndex(groupElementIndex);
  }
};

useTrapFocus(containerRef, {
  arrowFocusGroupSelector: '[data-group]',
  trapTabs: false,
  initialFocus: InitialFocusType.none,
});
useEventListener(containerRef, 'keydown', (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
  }
});
</script>

<template>
  <div
    :class="[
      'vsf-scrollable',
      `vsf-scrollable--${direction}`,
      {
        'vsf-scrollable--floating-nav': navigation === VsfScrollableNavigation.floating,
        'vsf-scrollable--snap-scroll': scrollSnap,
      },
    ]"
  >
    <div
      v-if="navigation !== VsfScrollableNavigation.none"
      :class="['vsf-scrollable__nav', 'vsf-scrollable__nav-prev', { 'vsf-scrollable__nav-arrow--hidden': !hasPrev }]"
    >
      <slot name="prev-button" v-bind="{ onClick: onClickPrev, hasPrev }">
        <VsfButton
          :variant="VsfButtonVariant.secondary"
          :size="VsfButtonSize.lg"
          rounded
          class="vsf-scrollable__nav-arrow"
          :disabled="!hasPrev"
          :aria-label="ariaLabelPrev"
          :tabindex="-1"
          @click="onClickPrev"
        >
          <template #prefix>
            <VsfIconChevronLeft v-if="isHorizontal" />
            <VsfIconExpandLess v-else />
          </template>
        </VsfButton>
      </slot>
    </div>
    <div
      ref="containerRef"
      :class="[
        'vsf-scrollable__container',
        scrollbar !== VsfScrollableScrollbar.hidden && `vsf-scrollable__container--scroll-${scrollbar}`,
      ]"
      @focus.capture="focusHandler"
    >
      <slot />
    </div>
    <div
      v-if="navigation !== VsfScrollableNavigation.none"
      :class="['vsf-scrollable__nav', 'vsf-scrollable__nav-next', { 'vsf-scrollable__nav-arrow--hidden': !hasNext }]"
    >
      <slot name="next-button" v-bind="{ onClick: onClickNext, hasNext }">
        <VsfButton
          :variant="VsfButtonVariant.secondary"
          :size="VsfButtonSize.lg"
          rounded
          :class="['vsf-scrollable__nav-arrow', { 'vsf-scrollable__nav-arrow--hidden': !hasNext }]"
          :disabled="!hasNext"
          :tabindex="-1"
          :aria-label="ariaLabelNext"
          @click="onClickNext"
        >
          <template #prefix>
            <VsfIconChevronRight v-if="isHorizontal" />
            <VsfIconExpandMore v-else />
          </template>
        </VsfButton>
      </slot>
    </div>
  </div>
</template>
