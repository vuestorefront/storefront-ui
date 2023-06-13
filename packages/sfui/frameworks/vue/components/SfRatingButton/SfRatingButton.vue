<script lang="ts" setup>
import { PropType, computed, ref, toRefs } from 'vue';
import {
  SfIconStar,
  SfIconStarFilled,
  SfIconSize,
  SfRatingButtonSize,
  type SfRatingButtonIconSize,
} from '@storefront-ui/vue';

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 5,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: 'sf-rating-button',
  },
  ariaLabel: {
    type: String,
    default: 'Rating',
  },
  size: {
    type: String as PropType<`${SfRatingButtonSize}`>,
    default: SfRatingButtonSize.base,
  },
  getLabelText: {
    type: Function as PropType<(value: number) => string>,
    default: (value: number) => `${value} Star${value !== 1 ? 's' : ''}`,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void;
}>();

const { max, disabled, modelValue } = toRefs(props);
const hoverModel = ref(0);
const icons = computed(() => Array.from({ length: Math.floor(Math.abs(max.value)) }, (_, index) => index + 1));
const isIconFilled = (ratingValue: number) =>
  ratingValue <= hoverModel.value || (hoverModel.value === 0 && ratingValue <= modelValue.value);
const iconSize: Record<SfRatingButtonSize, SfRatingButtonIconSize> = {
  [SfRatingButtonSize.sm]: SfIconSize.base,
  [SfRatingButtonSize.base]: SfIconSize.lg,
  [SfRatingButtonSize.lg]: SfIconSize.xl,
};

const handleChange = (event: Event) => {
  if (event?.target && event.target instanceof HTMLInputElement) {
    emit('update:modelValue', Number(event.target.value));
  }
};

const handleHoverIn = (ratingValue: number) => {
  if (!disabled.value) {
    hoverModel.value = ratingValue;
  }
};

const handleHoverOut = () => {
  if (!disabled.value) {
    hoverModel.value = 0;
  }
};
</script>

<template>
  <div role="radiogroup" :aria-label="ariaLabel" class="flex" data-testid="ratingbutton">
    <label
      v-for="ratingValue in icons"
      :key="ratingValue"
      @mouseenter="handleHoverIn(ratingValue)"
      @mouseleave="handleHoverOut"
    >
      <span class="sr-only">{{ getLabelText(ratingValue) }}</span>
      <input
        type="radio"
        class="sr-only peer"
        :name="name"
        :value="ratingValue"
        :checked="ratingValue === modelValue"
        :disabled="disabled"
        @change="handleChange"
      />
      <slot :is-filled="isIconFilled(ratingValue)" :icon-size="iconSize[size]" :max="max">
        <SfIconStarFilled
          v-if="isIconFilled(ratingValue)"
          data-testid="ratingbutton-icon-filled"
          role="none"
          class="text-primary-700 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline"
          :size="iconSize[size]"
        />
        <SfIconStar
          v-else
          data-testid="ratingbutton-icon-empty"
          role="none"
          class="text-neutral-500 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline"
          :size="iconSize[size]"
        />
      </slot>
    </label>
  </div>
</template>
