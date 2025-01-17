<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { computed, toRefs, type PropType, type ConcreteComponent, reactive } from 'vue';
import {
  ClassProp,
  SfScrollableDirection,
  SfScrollableButtonsPlacement,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfButton,
  useScrollable,
  type SfScrollableOnDragStartData,
  type SfScrollableOnScrollData,
  type SfScrollableOnPrevData,
  type SfScrollableOnNextData,
  type SfScrollableOnDragEndData,
  type ScrollableOptions,
} from '@storefront-ui/vue';

const props = defineProps({
  tag: {
    type: [String, Object] as PropType<string | ConcreteComponent>,
    default: 'div',
  },
  direction: {
    type: String as PropType<`${SfScrollableDirection}`>,
    default: SfScrollableDirection.horizontal,
  },
  buttonsPlacement: {
    type: String as PropType<`${SfScrollableButtonsPlacement}`>,
    default: SfScrollableButtonsPlacement.block,
  },
  wrapperClass: ClassProp,
  activeIndex: {
    type: Number,
    default: undefined,
  },
  reduceMotion: {
    type: Boolean,
    default: undefined,
  },
  drag: {
    type: [Object, Boolean] as PropType<ScrollableOptions['drag']>,
    default: undefined,
  },
  prevDisabled: {
    type: Boolean,
    default: undefined,
  },
  nextDisabled: {
    type: Boolean,
    default: undefined,
  },
  isActiveIndexCentered: {
    type: Boolean,
    default: false,
  },
  buttonPrevAriaLabel: {
    type: String,
    default: 'Previous',
  },
  buttonNextAriaLabel: {
    type: String,
    default: 'Next',
  },
});
const emit = defineEmits<{
  (e: 'onDragStart', data: SfScrollableOnDragStartData): void;
  (e: 'onDragEnd', data: SfScrollableOnDragEndData): void;
  (e: 'onScroll', data: SfScrollableOnScrollData): void;
  (e: 'onPrev', data: SfScrollableOnPrevData): void;
  (e: 'onNext', data: SfScrollableOnNextData): void;
}>();
const { direction, activeIndex, reduceMotion, drag, isActiveIndexCentered } = toRefs(props);

const { containerRef, state, getNextButtonProps, getPrevButtonProps } = useScrollable(
  computed(() => ({
    ...reactive({
      direction,
      activeIndex,
      reduceMotion,
      drag,
      isActiveIndexCentered,
    }),
    onDragStart: (data) => emit('onDragStart', data),
    onDragEnd: (data) => emit('onDragEnd', data),
    onScroll: (data) => emit('onScroll', data),
    onPrev: (data) => emit('onPrev', data),
    onNext: (data) => emit('onNext', data),
  })),
);

const isHorizontal = computed(() => props.direction === SfScrollableDirection.horizontal);
const isFloating = computed(() => props.buttonsPlacement === SfScrollableButtonsPlacement.floating);
const isBlock = computed(() => props.buttonsPlacement === SfScrollableButtonsPlacement.block);
</script>

<template>
  <div :class="['items-center', 'relative', isHorizontal ? 'flex' : 'flex-col h-full inline-flex', wrapperClass]">
    <slot
      v-if="$slots.previousButton && buttonsPlacement !== SfScrollableButtonsPlacement.none"
      v-bind="getPrevButtonProps"
      name="previousButton"
    />
    <SfButton
      v-else-if="buttonsPlacement !== SfScrollableButtonsPlacement.none"
      variant="secondary"
      size="lg"
      square
      :class="[
        '!rounded-full bg-white hidden md:block !ring-neutral-500 !text-neutral-500',
        {
          'mr-4': isBlock && isHorizontal,
          'mb-4 rotate-90': isBlock && !isHorizontal,
          'absolute left-4 z-10': isFloating && isHorizontal,
          'absolute top-4 rotate-90 z-10': isFloating && !isHorizontal,
        },
        isFloating ? 'disabled:hidden' : 'disabled:!ring-disabled-300 disabled:!text-disabled-500',
      ]"
      v-bind="getPrevButtonProps"
      :disabled="prevDisabled || getPrevButtonProps.disabled"
      :aria-label="buttonPrevAriaLabel"
    >
      <SfIconChevronLeft />
    </SfButton>
    <component
      :is="tag"
      ref="containerRef"
      :class="[
        'motion-safe:scroll-smooth',
        {
          'overflow-x-auto flex gap-4': isHorizontal,
          'overflow-y-auto flex flex-col gap-4': !isHorizontal,
          'cursor-grab': state.isDragged,
        },
      ]"
      v-bind="{ ...$attrs, ...props }"
      :disabled="prevDisabled"
    >
      <slot />
    </component>
    <slot
      v-if="$slots.nextButton && buttonsPlacement !== SfScrollableButtonsPlacement.none"
      v-bind="getNextButtonProps"
      name="nextButton"
    />
    <SfButton
      v-else-if="buttonsPlacement !== SfScrollableButtonsPlacement.none"
      variant="secondary"
      size="lg"
      square
      :class="[
        '!rounded-full bg-white hidden md:block !ring-neutral-500 !text-neutral-500',
        {
          'ml-4': isBlock && isHorizontal,
          'mt-4 rotate-90': isBlock && !isHorizontal,
          'absolute right-4 z-10': isFloating && isHorizontal,
          'absolute bottom-4 rotate-90 z-10': isFloating && !isHorizontal,
        },
        isFloating ? 'disabled:hidden' : 'disabled:!ring-disabled-300 disabled:!text-disabled-500',
      ]"
      v-bind="getNextButtonProps"
      :disabled="nextDisabled || getNextButtonProps.disabled"
      :aria-label="buttonNextAriaLabel"
    >
      <SfIconChevronRight />
    </SfButton>
  </div>
</template>
