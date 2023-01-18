<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed } from 'vue';
import type { VsfCardProps } from './types';
import { VsfCardSize, VsfCardLinkTags } from './types';
import { VsfButton } from '../VsfButton';
import { VsfButtonVariant, VsfButtonSize } from '../VsfButton/types';

defineEmits<{
  (event: 'clickCard', value: Event): void;
}>();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '',
  },
  linkTag: {
    type: String,
    default: VsfCardLinkTags.a,
  },
  size: {
    type: String as PropType<`${VsfCardSize}`>,
    default: null,
  },
  imgSrc: {
    type: String,
    default: '',
  },
  imgAttr: {
    type: Object as PropType<VsfCardProps['imgAttr']>,
    default: () => ({}),
  },
  description: {
    type: String,
    default: '',
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
    <component
      :is="linkTag"
      v-if="imgSrc"
      class="vsf-card__image-wrapper"
      :href="isLinkAString && link"
      v-bind="!isLinkAString && link"
    >
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
        v-if="buttonText && !rounded"
        class="vsf-card__button"
        :variant="VsfButtonVariant.tertiary"
        :size="VsfButtonSize.sm"
        :link="link"
        data-testid="card-button"
        @click.prevent="$emit('clickCard', $event)"
        >{{ buttonText }}</VsfButton
      >
    </div>
  </div>
</template>
