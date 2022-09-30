<template>
  <VsfIconBase
    :size="size"
    aria-label="triangle-right"
    viewBox="0 0 24 24"
    content="<path d='M14.124 10.886a1 1 0 0 1 0 1.519L9.661 16.23a1 1 0 0 1-1.651-.76V7.82a1 1 0 0 1 1.65-.76l4.464 3.826Z'/>"
  />
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import VsfIconBase from '../VsfIconBase/VsfIconBase.vue';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

defineProps({
  size: {
    type: String as PropType<VsfIconSizeEnum>,
    default: VsfIconSizeEnum.base,
  },
});
</script>
