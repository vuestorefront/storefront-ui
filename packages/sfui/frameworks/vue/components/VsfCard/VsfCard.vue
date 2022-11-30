<script lang="ts" setup>
import { PropType, computed, ref, toRefs, watch } from 'vue';
import { VsfCardSizes, VsfCardLinkTags, VsfCardProps } from './types';
import VsfButton from '../VsfButton/VsfButton.vue';
import { VsfButtonVariants, VsfButtonSizes } from '../VsfButton/types';
import { useWindowSize } from '@vueuse/core';

defineEmits<{
  (event: 'clickCard', value: Event): void;
}>();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: [String, Object],
    default: '',
  },
  linkTag: {
    type: String,
    default: VsfCardLinkTags.a,
  },
  size: {
    type: String as PropType<VsfCardSizes>,
    default: null,
  },
  imgSrc: {
    type: String,
    default: '',
  },
  imgAttr: {
    type: Object as PropType<VsfCardProps>,
    default: () => ({}),
  },
  description: {
    type: String,
    default: '',
  },
  withButton: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
    default: '',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});
const { size } = toRefs(props);
const { width } = useWindowSize();
const newSize = ref(size.value);
const isLinkAString = computed(() => {
  return typeof props.link === 'string';
});
const imageWidth = computed(() => {
  switch (size.value) {
    case VsfCardSizes.sm:
      return 192;
    case VsfCardSizes.base:
      return 320;
    default:
      return 320;
  }
});
watch(
  width,
  (newWindowWidth) => {
    if (size.value) return;
    if (newWindowWidth < 769) {
      newSize.value = VsfCardSizes.sm;
    } else {
      newSize.value = VsfCardSizes.base;
    }
  },
  { immediate: true },
);
</script>

<template>
  <div
    class="vsf-card"
    :class="[
      {
        'vsf-card--size-sm': newSize === VsfCardSizes.sm,
        'vsf-card--size-base': newSize === VsfCardSizes.base,
        'vsf-card--rounded': rounded,
      },
    ]"
  >
    <component :is="linkTag" v-if="imgSrc" :href="isLinkAString && link" v-bind="!isLinkAString && link">
      <slot name="image">
        <img class="vsf-card__image" v-bind="imgAttr" :src="imgSrc" :width="imageWidth" />
      </slot>
    </component>
    <div class="vsf-card__content-wrapper">
      <component :is="linkTag" class="vsf-card__title" :href="isLinkAString && link" v-bind="!isLinkAString && link">{{
        title
      }}</component>
      <p v-if="description && !rounded" class="vsf-card__description">{{ description }}</p>
      <VsfButton
        v-if="withButton && !rounded"
        class="vsf-card__button"
        :variant="VsfButtonVariants.tertiary"
        :size="VsfButtonSizes.sm"
        :link="link"
        @click.prevent="$emit('clickCard', $event)"
        >{{ buttonText }}</VsfButton
      >
    </div>
  </div>
</template>
