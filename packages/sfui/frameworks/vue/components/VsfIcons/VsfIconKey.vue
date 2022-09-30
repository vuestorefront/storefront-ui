<template>
  <VsfIconBase
    :size="size"
    aria-label="key"
    viewBox="0 0 24 24"
    content="<path fill-rule='evenodd' clip-rule='evenodd' d='M12.65 10A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H17v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 0-4h-8.35ZM7 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'/>"
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
