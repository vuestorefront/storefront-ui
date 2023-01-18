<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="info"
    content="<path d='M12 17a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Zm0-7.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Z'/><path d='M12 17a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1Zm0-7.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm2 0c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8Z'/>"
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
