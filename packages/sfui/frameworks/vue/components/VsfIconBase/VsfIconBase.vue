<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfIconSizeEnum } from './types';

defineProps({
  content: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<VsfIconSizeEnum>,
    default: VsfIconSizeEnum.base
  }
})
</script>

<template>
  <svg role="img"
    xmlns="http://www.w3.org/2000/svg"
    v-html="content"
    class="vsf-icon"
    :class="[`vsf-icon-${size}`, $attrs.class]"
  ></svg>
</template>
