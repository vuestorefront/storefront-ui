<template>
  <VsfIconBase
    :size="size"
    aria-label="arrow-up"
    viewBox="0 0 24 24"
    content="<path d='M5.706 8.295a.998.998 0 0 0 1.41 1.411L11 5.83V21a1 1 0 1 0 2 0V5.83l3.88 3.88a1 1 0 0 0 1.415-1.415l-5.588-5.588a1 1 0 0 0-1.414 0L5.706 8.295Z'/><path d='M5.706 8.295a.998.998 0 0 0 1.41 1.411L11 5.83V21a1 1 0 1 0 2 0V5.83l3.88 3.88a1 1 0 0 0 1.415-1.415l-5.588-5.588a1 1 0 0 0-1.414 0L5.706 8.295Z'/>"
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
