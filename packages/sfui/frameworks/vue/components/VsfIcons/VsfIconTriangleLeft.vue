<template>
  <VsfIconBase
    :size="size"
    aria-label="triangle-left"
    viewBox="0 0 24 24"
    content="<path d='M8.359 11.059a1 1 0 0 0 0 1.518l4.463 3.826a1 1 0 0 0 1.651-.76v-7.65a1 1 0 0 0-1.65-.76L8.358 11.06Z'/>"
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
