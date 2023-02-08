<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref, toRefs, defineAsyncComponent, computed } from 'vue';
import { isReduceMotionEnabled } from '@storefront-ui/shared';
import { VsfScrollableNavigation, VsfScrollableScrollbar, VsfScrollableDirection } from './types';
import { VsfButtonVariant, VsfButtonSize } from '../VsfButton';
import { useScrollable } from './scrollable';
const VsfButton = defineAsyncComponent(() => import('../VsfButton/VsfButton.vue'));
const VsfIconChevronLeft = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronLeft.vue'));
const VsfIconChevronRight = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronRight.vue'));
const VsfIconChevronUp = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronUp.vue'));
const VsfIconChevronDown = defineAsyncComponent(() => import('../VsfIcons/VsfIconChevronDown.vue'));

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
const [container, scrollable] = useScrollable(
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
  const elementIndex = Array.from(scrollable.value?.container.children as ArrayLike<Element>).findIndex(
    (el) => el === event.target,
  );
  scrollable.value?.scrollToIndex(elementIndex);
};
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
          :aria-label="ariaLabelNext"
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
