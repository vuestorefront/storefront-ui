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
const isLinkAString = computed(() => {
  return typeof props.link === 'string';
});
</script>

<template>
  <div
    class="vsf-card"
    :class="[
      {
        'vsf-card--size-sm': size === VsfCardSizes.sm,
        'vsf-card--size-base': size === VsfCardSizes.base,
        'vsf-card--rounded': rounded,
      },
    ]"
  >
    <component :is="linkTag" v-if="imgSrc" :href="isLinkAString && link" v-bind="!isLinkAString && link">
      <slot name="image">
        <img class="vsf-card__image" v-bind="imgAttr" :src="imgSrc" />
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
