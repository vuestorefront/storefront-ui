<script setup lang="ts">
  import type { PropType } from "vue";
  import type { VsfCounterSizesKeys } from "./types";

  defineProps({
    size: {
      type: String as PropType<VsfCounterSizesKeys>,
      default: 'base',
    },
    pill: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <span
    :class="[
      'vsf-counter',
      `vsf-counter__font-size--${size}`,
      `vsf-counter__font-weight--${size}`,
      `${pill ?
        `vsf-counter__font-weight--pill
         vsf-counter__pill-size--${size}
         vsf-counter__pill-spacing--${size}` :
        'vsf-counter__pill-brackets'
      }`,
    ]"
  >
    <slot />
  </span>
</template>
