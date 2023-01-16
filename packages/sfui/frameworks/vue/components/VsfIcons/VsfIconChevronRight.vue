<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="chevron-right"
    content="<path d='M8.704 8.115a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.587a.997.997 0 0 1-1.412-1.41L12.58 12 8.704 8.115Z'/><path d='M8.704 8.115a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.587a.997.997 0 0 1-1.412-1.41L12.58 12 8.704 8.115Z'/>"
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
