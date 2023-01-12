<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="minus"
    content="<path fill-rule='evenodd' clip-rule='evenodd' d='M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M5 13h14a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2Z'/>"
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
