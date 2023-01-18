<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="swap-data"
    content="<path d='M20.999 5a1 1 0 0 1 1 .998v5.145a1 1 0 1 1-2 0V8.414l-6.436 6.436a1 1 0 0 1-1.414-1.414L18.585 7h-2.73a1 1 0 1 1 0-2H21Zm-9.579 5.993a1 1 0 0 0-1.414-1.414L4 15.586v-2.729a1 1 0 1 0-2 0V18a1 1 0 0 0 1 1h5.143a1 1 0 1 0 0-2h-2.73l6.007-6.007Z'/><path d='M20.999 5a1 1 0 0 1 1 .998v5.145a1 1 0 1 1-2 0V8.414l-6.436 6.436a1 1 0 0 1-1.414-1.414L18.585 7h-2.73a1 1 0 1 1 0-2H21Zm-9.579 5.993a1 1 0 0 0-1.414-1.414L4 15.586v-2.729a1 1 0 1 0-2 0V18a1 1 0 0 0 1 1h5.143a1 1 0 1 0 0-2h-2.73l6.007-6.007Z'/>"
  />
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfIconBase, VsfIconSize } from '../VsfIconBase';

defineProps({
  size: {
    type: String as PropType<`${VsfIconSize}`>,
    default: VsfIconSize.base,
  },
});
</script>
