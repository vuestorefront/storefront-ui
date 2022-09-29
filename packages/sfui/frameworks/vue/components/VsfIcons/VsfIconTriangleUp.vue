<template>
  <VsfIconBase
    :size="size"
    aria-label="triangle-up"
    viewBox="0 0 24 24"
    content="<path d='M11.069 9.35a1 1 0 0 1 1.518 0l3.826 4.463a1 1 0 0 1-.76 1.65H8.002a1 1 0 0 1-.76-1.65l3.827-4.464Z'/>"
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
