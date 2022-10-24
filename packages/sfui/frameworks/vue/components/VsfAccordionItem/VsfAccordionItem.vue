<script lang="ts" setup>
import VsfIconTriangleUp from '../VsfIcons/VsfIconTriangleUp.vue';

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
</script>

<template>
  <details class="vsf-accordion-item" :open="open" data-testid="accordion-item">
    <summary :class="`${chevronLeft && 'vsf-accordion-item__header--right'} vsf-accordion-item__header`">
      <slot name="prefix">
        <span :class="`${chevronLeft && 'vsf-accordion-item__title--right'} vsf-accordion-item__title`">
          {{ title }}
        </span>
      </slot>

      <slot name="suffix">
        <vsf-icon-triangle-up class="vsf-accordion-item__icon" />
      </slot>
    </summary>
    <div class="vsf-accordion-item__content">
      <slot />
    </div>
  </details>
</template>
