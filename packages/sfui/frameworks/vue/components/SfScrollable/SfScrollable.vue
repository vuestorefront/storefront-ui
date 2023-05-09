<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { computed, toRefs, type PropType, reactive } from 'vue';
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
    type: String,
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
    type: [Object || Boolean] as PropType<ScrollableOptions['drag']>,
    default: undefined,
  },
  previousDisabled: {
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
});
const emit = defineEmits<{
  (e: 'onDragStart', data: SfScrollableOnDragStartData): void;
  (e: 'onDragEnd', data: SfScrollableOnDragEndData): void;
  (e: 'onScroll', data: SfScrollableOnScrollData): void;
  (e: 'onPrev', data: SfScrollableOnPrevData): void;
  (e: 'onNext', data: SfScrollableOnNextData): void;
}>();
const { direction, activeIndex, reduceMotion, drag, isActiveIndexCentered } = toRefs(props);

const { getContainerRef, state, getNextButtonProps, getPrevButtonProps } = useScrollable(
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

const changeDisabledClass = (isDisabled: boolean) =>
  isDisabled ? '!ring-disabled-300 !text-disabled-500' : '!ring-neutral-500 !text-neutral-500';
const isHorizontal = computed(() => props.direction === SfScrollableDirection.horizontal);
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
        '!rounded-full bg-white hidden md:block',
        buttonsPlacement === SfScrollableButtonsPlacement.block && (isHorizontal ? 'mr-4' : 'mb-4 rotate-90'),
        buttonsPlacement === SfScrollableButtonsPlacement.floating && (isHorizontal ? 'left-4' : 'top-4 rotate-90'),
        { 'absolute z-10': buttonsPlacement === SfScrollableButtonsPlacement.floating },
        changeDisabledClass(typeof previousDisabled === 'boolean' ? previousDisabled : getPrevButtonProps.disabled),
      ]"
      v-bind="getPrevButtonProps"
      :disabled="previousDisabled"
    >
      <SfIconChevronLeft />
    </SfButton>
    <component
      :is="tag"
      ref="getContainerRef"
      :class="[
        'motion-safe:scroll-smooth',
        {
          'overflow-x-auto flex gap-4': isHorizontal,
          'overflow-y-auto flex flex-col gap-4': !isHorizontal,
          'cursor-grab': state.isDragged,
        },
      ]"
      v-bind="{ ...$attrs, ...props }"
      :disabled="previousDisabled"
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
        '!rounded-full bg-white hidden md:block',
        buttonsPlacement === SfScrollableButtonsPlacement.block && (isHorizontal ? 'ml-4' : 'mt-4 rotate-90'),
        buttonsPlacement === SfScrollableButtonsPlacement.floating && (isHorizontal ? 'right-4' : 'bottom-4 rotate-90'),
        { 'absolute z-10': buttonsPlacement === SfScrollableButtonsPlacement.floating },
        changeDisabledClass(typeof nextDisabled === 'boolean' ? nextDisabled : getNextButtonProps.disabled),
      ]"
      v-bind="getNextButtonProps"
      :disabled="nextDisabled"
    >
      <SfIconChevronRight />
    </SfButton>
  </div>
</template>
