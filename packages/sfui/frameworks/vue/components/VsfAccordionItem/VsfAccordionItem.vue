<script lang="ts" setup>
import VsfIconTriangleUp from '../VsfIcons/VsfIconTriangleUp.vue';

const props = defineProps({
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
  onToggle: {
    type: Function,
    default: null,
  },
});

function onToggle(e: Event) {
  // https://github.com/vuejs/core/issues/5220#issuecomment-1007488240
  if (props.onToggle) {
    e.preventDefault();
    props.onToggle();
  }
}
</script>

<template>
  <details class="vsf-accordion-item" :open="open">
    <summary
      :class="`${chevronLeft && 'vsf-accordion-item__header--right'} vsf-accordion-item__header`"
      @click="onToggle"
    >
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
