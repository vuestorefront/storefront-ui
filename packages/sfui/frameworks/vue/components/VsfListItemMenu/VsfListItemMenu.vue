<script setup lang="ts">
import { PropType } from 'vue';
import { VsfListItemMenuSizes } from './types';
import VsfCounter from '../VsfCounter/VsfCounter.vue';
import { VsfCounterSizes } from '../VsfCounter/types';

defineProps({
  label: {
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
});
</script>

<template>
  <button
    :class="[
      'vsf-list-item-menu peer',
      `vsf-list-item-menu--size-${size}`,
      { 'vsf-list-item-menu--selected': selected, 'vsf-list-item-menu--disabled': disabled },
    ]"
    type="button"
    :disabled="disabled"
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
      <span v-if="secondaryText" class="vsf-list-item-menu__secondary-text">{{ secondaryText }}</span>
    </div>
    <div v-if="$slots.suffix" class="vsf-list-item-menu__icon">
      <slot name="suffix" />
    </div>
  </button>
</template>
