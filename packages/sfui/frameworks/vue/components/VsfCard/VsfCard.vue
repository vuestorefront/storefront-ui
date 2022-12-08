<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { VsfCardSizes, VsfCardLinkTags, VsfCardProps } from './types';
import VsfButton from '../VsfButton/VsfButton.vue';
import { VsfButtonVariants, VsfButtonSizes } from '../VsfButton/types';

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
    :class="[
      'vsf-card',
      `vsf-card--size-${size}`,
      {
        'vsf-card--rounded': rounded,
      },
    ]"
    data-testid="card"
  >
    <!-- TODO: replace with link component -->
    <component :is="linkTag" v-if="imgSrc" :href="isLinkAString && link" v-bind="!isLinkAString && link">
      <slot name="image">
        <img class="vsf-card__image" v-bind="imgAttr" :src="imgSrc" data-testid="card-image" />
      </slot>
    </component>
    <div class="vsf-card__content-wrapper">
      <component
        :is="linkTag"
        class="vsf-card__title"
        :href="isLinkAString && link"
        v-bind="!isLinkAString && link"
        data-testid="card-title"
        >{{ title }}</component
      >
      <p v-if="description && !rounded" class="vsf-card__description" data-testid="card-description">
        {{ description }}
      </p>
      <VsfButton
        v-if="withButton && !rounded"
        class="vsf-card__button"
        :variant="VsfButtonVariants.tertiary"
        :tag="linkTag"
        :size="VsfButtonSizes.sm"
        :link="link"
        data-testid="card-button"
        @click.prevent="$emit('clickCard', $event)"
        >{{ buttonText }}</VsfButton
      >
    </div>
  </div>
</template>
