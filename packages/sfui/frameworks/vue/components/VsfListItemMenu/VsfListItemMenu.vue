<script setup lang="ts">
import type { PropType } from 'vue';
import { computed, toRefs } from 'vue';
import { VsfListItemMenuSize } from './types';
import { VsfCounter, VsfCounterSize } from '../VsfCounter';

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
    type: String as PropType<`${VsfListItemMenuSize}`>,
    default: VsfListItemMenuSize.base,
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
    default: undefined,
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
    type: String,
    default: undefined,
  },
});
const { tag, link, disabled } = toRefs(props);
// TODO: replace with link component when ready
const componentTag = computed(() => tag?.value ?? (link?.value ? 'a' : 'button'));
const componentType = computed(() => (tag?.value ? undefined : link?.value && 'button'));
const componentDisabled = computed(() => (!link?.value ? disabled?.value : undefined));
</script>

<template>
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
    <div v-if="$slots.prefix" class="vsf-list-item-menu__icon vsf-list-item-menu__icon--prefix">
      <slot name="prefix" />
    </div>
    <div class="vsf-list-item-menu__content">
      <slot>
        <span class="vsf-list-item-menu__title">
          <span v-if="label" class="vsf-list-item-menu__label" data-testid="list-item-menu-label">{{ label }}</span>
          <VsfCounter
            v-if="counter"
            :size="VsfCounterSize.xl"
            class="vsf-list-item-menu__counter"
            data-testid="list-item-menu-counter"
            >{{ counter }}</VsfCounter
          >
        </span>
      </slot>
      <slot name="secondaryText">
        <p
          v-if="secondaryText"
          :class="['vsf-list-item-menu__secondary-text', { 'vsf-list-item-menu__secondary-text--truncated': truncate }]"
          data-testid="list-item-menu-secondary-text"
        >
          {{ secondaryText }}
        </p>
      </slot>
    </div>
    <div v-if="$slots.suffix" class="vsf-list-item-menu__icon">
      <slot name="suffix" />
    </div>
  </component>
</template>
