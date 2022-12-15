<script setup lang="ts">
import { PropType, computed, toRefs } from 'vue';
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
    default: undefined,
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
  selectedBackground: {
    type: Boolean,
    default: false,
  },
  truncate: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String as PropType<'li'>,
    default: undefined
  }
});
const { tag, link, disabled } = toRefs(props);
// TODO: replace with link component when ready
const componentTag = computed(() => tag?.value ?? (link?.value ? 'a' : 'button'));
const componentType = computed(() => tag?.value ? undefined : link?.value && 'button');
const componentDisabled = computed(() => (!link?.value || tag?.value) ? disabled.value : undefined);
</script>

<template>
  <!-- TODO: Replace with Link component when ready -->
  <component
    :is="componentTag"
    :href="link"
    :class="[
      'vsf-list-item-menu peer',
      `vsf-list-item-menu--size-${size}`,
      {
        'vsf-list-item-menu--selected': selected,
        'vsf-list-item-menu--selected-bg': selected && selectedBackground,
        'vsf-list-item-menu--disabled': disabled,
      },
    ]"
    :type="componentType"
    :disabled="componentDisabled"
    data-testid="list-item-menu"
  >
    <span v-if="$slots.prefix" class="vsf-list-item-menu__icon vsf-list-item-menu__icon--prefix">
      <slot name="prefix" />
    </span>
    <span class="vsf-list-item-menu__content">
      <span class="vsf-list-item-menu__title">
        <span v-if="label" class="vsf-list-item-menu__label" data-testid="list-item-menu-label">{{ label }}</span>
        <VsfCounter
          v-if="counter"
          :size="VsfCounterSizes.xl"
          class="vsf-list-item-menu__counter"
          data-testid="list-item-menu-counter"
          >{{ counter }}</VsfCounter
        >
      </span>
      <p
        v-if="secondaryText"
        :class="['vsf-list-item-menu__secondary-text', { 'vsf-list-item-menu__secondary-text--truncated': truncate }]"
        data-testid="list-item-menu-secondary-text"
      >
        {{ secondaryText }}
      </p>
    </span>
    <span v-if="$slots.suffix" class="vsf-list-item-menu__icon">
      <slot name="suffix" />
    </span>
  </component>
</template>
