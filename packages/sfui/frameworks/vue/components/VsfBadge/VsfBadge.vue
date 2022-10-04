<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  dot: {
    type: Boolean,
    default: false,
  },
  invisible: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  value: {
    type: [Number, String],
    default: null,
  },
});
const classes = computed(() => [
  'vsf-badge',
  {
    'vsf-badge--dot': props.dot,
    'vsf-badge--bordered': props.bordered,
  },
]);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div :class="classes">
    <slot></slot>
    <div v-if="!invisible && value" className="vsf-badge__wrapper">
      <div v-if="dot" class="vsf-badge__badge vsf-badge__dot" v-bind="$attrs"></div>
      <div v-else class="vsf-badge__badge vsf-badge__base" v-bind="$attrs">{{ value }}</div>
    </div>
  </div>
</template>
