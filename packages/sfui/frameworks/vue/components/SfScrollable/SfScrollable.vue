<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { computed, toRefs, type PropType, reactive } from 'vue';
import {
  SfScrollableDirection,
  SfScrollableButtonsPlacement,
  useScrollable,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfButton,
  type SfScrollableOnDragChangeData,
  type SfScrollableOnScrollData,
  ClassProp,
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
    default: SfScrollableButtonsPlacement.blocked,
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
    type: Boolean,
    default: undefined,
  },
});
const emit = defineEmits<{
  (e: 'onDragChange', data: SfScrollableOnDragChangeData): void;
  (e: 'onScroll', data: SfScrollableOnScrollData): void;
  (e: 'onPrev'): void;
  (e: 'onNext'): void;
}>();
const { direction, activeIndex, reduceMotion, drag } = toRefs(props);

const { getContainerRef, state, getNextButtonProps, getPrevButtonProps } = useScrollable(
  computed(() => ({
    ...reactive({
      direction,
      activeIndex,
      reduceMotion,
      drag,
    }),
    onDragChange: (data) => emit('onDragChange', data),
    onScroll: (data) => emit('onScroll', data),
    onPrev: () => emit('onPrev'),
    onNext: () => emit('onPrev'),
  })),
);

const isHorizontal = computed(() => props.direction === SfScrollableDirection.horizontal);
</script>

<template>
  <div :class="['items-center', 'relative', isHorizontal ? 'flex' : 'flex-col h-full inline-flex', wrapperClass]">
    <div v-if="$slots.previouButton" v-bind="getPrevButtonProps"><slot name="previouButton" /></div>
    <SfButton
      v-else-if="buttonsPlacement === SfScrollableButtonsPlacement.blocked"
      variant="secondary"
      size="lg"
      square
      :class="['!rounded-full bg-white !ring-gray-200 !text-gray-500', isHorizontal ? 'mr-4' : 'mb-4 rotate-90']"
      v-bind="getPrevButtonProps"
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
    >
      <div v-if="$slots.previouButton" v-bind="getPrevButtonProps"><slot name="previouButton" /></div>
      <SfButton
        v-else-if="buttonsPlacement === SfScrollableButtonsPlacement.floating"
        variant="secondary"
        size="lg"
        square
        :class="[
          'absolute !rounded-full bg-white !ring-gray-200 !text-gray-500',
          isHorizontal ? 'left-4' : 'top-4 rotate-90',
        ]"
        v-bind="getPrevButtonProps"
      >
        <SfIconChevronLeft />
      </SfButton>
      <slot />
      <div v-if="$slots.nextButton" v-bind="getNextButtonProps"><slot name="nextButton" /></div>
      <SfButton
        v-else-if="buttonsPlacement === SfScrollableButtonsPlacement.floating"
        variant="secondary"
        size="lg"
        square
        :class="[
          'absolute !rounded-full bg-white !ring-gray-200 !text-gray-500',
          isHorizontal ? 'right-4' : 'bottom-4 rotate-90',
        ]"
        v-bind="getNextButtonProps"
      >
        <SfIconChevronRight />
      </SfButton>
    </component>
    <div v-if="$slots.nextButton" v-bind="getNextButtonProps"><slot name="nextButton" /></div>
    <SfButton
      v-else-if="buttonsPlacement === SfScrollableButtonsPlacement.blocked"
      variant="secondary"
      size="lg"
      square
      :class="['!rounded-full bg-white !ring-gray-200 !text-gray-500', isHorizontal ? 'ml-4' : 'mt-4 rotate-90']"
      v-bind="getNextButtonProps"
    >
      <SfIconChevronRight />
    </SfButton>
  </div>
</template>
