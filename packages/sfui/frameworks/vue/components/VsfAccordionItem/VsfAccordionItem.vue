<script lang="ts" setup>
import { VsfIconTriangleUp } from '../VsfIcons';

defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  chevronLeft: {
    type: Boolean,
    default: false,
  },
});
defineEmits<{
  (event: 'toggle', value: Event): void;
}>();
</script>

<template>
  <details class="vsf-accordion-item" :open="open" data-testid="accordion-item" @toggle="$emit('toggle', $event)">
    <summary :class="[{ 'vsf-accordion-item__header--right': chevronLeft }, 'vsf-accordion-item__header']">
      <slot name="prefix">
        <span
          :class="[{ 'vsf-accordion-item__title--right': chevronLeft }, 'vsf-accordion-item__title']"
          data-testid="accordion-item-title"
        >
          {{ title }}
        </span>
      </slot>

      <slot name="suffix">
        <vsf-icon-triangle-up class="vsf-accordion-item__icon" />
      </slot>
    </summary>
    <div class="vsf-accordion-item__content" data-testid="accordion-item-content">
      <slot />
    </div>
  </details>
</template>
