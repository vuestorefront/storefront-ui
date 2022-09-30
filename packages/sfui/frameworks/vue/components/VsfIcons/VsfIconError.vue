<template>
  <VsfIconBase
    :size="size"
    aria-label="error"
    viewBox="0 0 24 24"
    content="<path fill-rule='evenodd' clip-rule='evenodd' d='M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Zm1-14a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V8Zm-2.25 8a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Zm1-14a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0V8Zm-2.25 8a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z'/>"
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
