<script setup lang="ts">
import { PropType, computed } from 'vue';
import { VsfListItemMenuSizes } from './types';
import VsfCounter from '../VsfCounter/VsfCounter.vue';
import { VsfCounterSizes } from '../VsfCounter/types';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<VsfListItemMenuSizes>,
    default: VsfListItemMenuSizes.base,
  },
  secondaryText: {
    type: String,
    default: '',
  },
  counter: {
    type: Number,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  isTruncated: {
    type: Boolean,
    default: false,
  },
});
// TODO: replace with link component when ready
const componentTag = computed(() => {
  return props.link ? 'a' : 'button';
});
</script>

<template>
  <component
    :is="componentTag"
    :href="link"
    :class="[
      'vsf-list-item-menu peer',
      `vsf-list-item-menu--size-${size}`,
      { 'vsf-list-item-menu--selected': selected, 'vsf-list-item-menu--disabled': disabled },
    ]"
    type="button"
    :disabled="disabled"
    data-testid="list-item-menu"
  >
    <div v-if="$slots.preffix" class="vsf-list-item-menu__icon vsf-list-item-menu__icon--preffix">
      <slot name="preffix" />
    </div>
    <div class="vsf-list-item-menu__content">
      <div class="vsf-list-item-menu__title">
        <span v-if="label" class="vsf-list-item-menu__label">{{ label }}</span>
        <VsfCounter v-if="counter" :size="VsfCounterSizes.xl" class="vsf-list-item-menu__counter">{{
          counter
        }}</VsfCounter>
      </div>
      <span
        v-if="secondaryText"
        :class="[
          'vsf-list-item-menu__secondary-text',
          { 'vsf-list-item-menu__secondary-text--truncated': isTruncated },
        ]"
        >{{ secondaryText }}</span
      >
    </div>
    <div v-if="$slots.suffix" class="vsf-list-item-menu__icon">
      <slot name="suffix" />
    </div>
  </component>
</template>
