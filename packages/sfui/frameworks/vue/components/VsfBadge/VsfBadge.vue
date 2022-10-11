<script lang="ts" setup>
defineProps({
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
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div
    :class="[
      'vsf-badge',
      {
        'vsf-badge--dot': dot,
        'vsf-badge--bordered': bordered,
      },
    ]"
  >
    <slot></slot>
    <div v-if="!invisible && value" class="vsf-badge__wrapper">
      <div v-if="dot" class="vsf-badge__badge vsf-badge__dot" v-bind="$attrs"></div>
      <div v-else class="vsf-badge__badge vsf-badge__base" v-bind="$attrs">{{ value }}</div>
    </div>
  </div>
</template>
