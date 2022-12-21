<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    content="<path d='M8.294 18.294a.998.998 0 0 0 1.412-1.41L5.83 13H21a1 1 0 1 0 0-2H5.83l3.88-3.88a1 1 0 1 0-1.415-1.415l-5.588 5.588a1 1 0 0 0 0 1.414l5.587 5.587Z'/><path d='M8.294 18.294a.998.998 0 0 0 1.412-1.41L5.83 13H21a1 1 0 1 0 0-2H5.83l3.88-3.88a1 1 0 1 0-1.415-1.415l-5.588 5.588a1 1 0 0 0 0 1.414l5.587 5.587Z'/>"
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
