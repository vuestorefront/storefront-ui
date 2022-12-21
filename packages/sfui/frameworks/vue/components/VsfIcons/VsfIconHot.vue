<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    content="<path d='M11.068 1.687c0-.852-1.097-1.173-1.58-.467-4.435 6.483 1.867 6.774 1.867 9.925a2.291 2.291 0 0 1-2.322 2.292c-1.26-.016-2.262-1.066-2.262-2.325V8.05c0-.777-.947-1.154-1.483-.591-.959 1.007-1.954 2.732-1.954 4.832a6.883 6.883 0 0 0 6.875 6.875 6.883 6.883 0 0 0 6.875-6.875c0-6.097-6.016-6.91-6.016-10.604Z'/>"
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
