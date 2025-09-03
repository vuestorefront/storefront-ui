<script lang="ts" setup>
import { type PropType, computed, ref, toRefs } from 'vue';
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

const radioModel = computed({
  set(value: number) {
    emit('update:modelValue', value);
  },
  get() {
    return props.modelValue;
  },
});

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

<!-- eslint-disable vuejs-accessibility/no-static-element-interactions -->
<template>
  <div role="radiogroup" class="flex" data-testid="ratingbutton">
    <label
      v-for="ratingValue in icons"
      :key="ratingValue"
      @mouseenter="handleHoverIn(ratingValue)"
      @mouseleave="handleHoverOut"
    >
      <input
        v-model="radioModel"
        type="radio"
        class="sr-only peer"
        :name="name"
        :value="ratingValue"
        :disabled="disabled"
        :aria-label="getLabelText(ratingValue)"
      />
      <slot :is-filled="isIconFilled(ratingValue)" :icon-size="iconSize[size]" :max="max">
        <SfIconStarFilled
          v-if="isIconFilled(ratingValue)"
          role="none"
          class="text-primary-700 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline"
          :size="iconSize[size]"
        />
        <SfIconStar
          v-else
          role="none"
          class="text-neutral-500 cursor-pointer peer-disabled:cursor-default peer-disabled:text-disabled-500 peer-focus-visible:outline"
          :size="iconSize[size]"
        />
      </slot>
    </label>
  </div>
</template>
