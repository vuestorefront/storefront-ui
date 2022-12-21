<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    content="<path d='M6 12c0-3.312 2.688-6 6-6s6 2.688 6 6-2.688 6-6 6-6-2.688-6-6Z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM4 12c0-4.415 3.585-8 8-8s8 3.585 8 8-3.585 8-8 8-8-3.585-8-8Z'/>"
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
