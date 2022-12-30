<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    content="<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z'/><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z'/><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z'/><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1.293 14.293a1 1 0 0 1-1.414 0l-3.588-3.587a.998.998 0 0 1 1.41-1.412L10 14.17l6.583-6.673a1 1 0 0 1 1.415 1.415l-7.29 7.38Z'/>"
  />
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfIconBase, VsfIconSizeEnum } from '../VsfIconBase';

defineProps({
  size: {
    type: String as PropType<VsfIconSizeEnum>,
    default: VsfIconSizeEnum.base,
  },
});
</script>
