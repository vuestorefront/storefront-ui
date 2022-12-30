<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    content="<path d='m17.01 13.25.555-3.62h-3.473V7.282c0-.99.485-1.956 2.04-1.956h1.58V2.245S16.279 2 14.909 2c-2.86 0-4.73 1.734-4.73 4.872V9.63H7v3.62h3.18V22h3.912v-8.75h2.918Z'/>"
  />
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfIconBase, VsfIconSizeEnum } from '../VsfIconBase';

defineProps({
  size: {
    type: String as PropType<VsfIconSizeEnum>,
    default: VsfIconSizeEnum.base,
  },
});
</script>
