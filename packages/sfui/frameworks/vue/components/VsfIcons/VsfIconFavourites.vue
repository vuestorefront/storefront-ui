<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    content="<path d='M10.67 21.133c-5.52-4.95-8.72-7.64-8.67-11.39.04-2.97 2.3-4.39 2.35-4.43 3.61-2.46 6.89.22 7.65 1.11.75-.88 3.99-3.51 7.56-1.16.52.34 2.23 1.65 2.42 4.12.32 4.28-4.14 7.76-8.65 11.76-.38.34-.86.5-1.34.5-.47 0-.94-.17-1.32-.51Z'/>"
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
