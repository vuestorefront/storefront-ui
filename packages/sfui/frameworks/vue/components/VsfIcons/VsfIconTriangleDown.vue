<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="triangle-down"
    content="<path d='M11.24 15.114a1 1 0 0 0 1.52 0l3.825-4.463A1 1 0 0 0 15.825 9h-7.65a1 1 0 0 0-.76 1.65l3.826 4.464Z'/>"
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
