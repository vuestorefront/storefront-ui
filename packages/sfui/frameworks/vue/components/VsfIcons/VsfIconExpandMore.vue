<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="expand-more"
    content="<path d='M17 9.003a.998.998 0 0 0-1.41 0l-3.885 3.876L7.82 9.003a.998.998 0 0 0-1.41 1.411l4.588 4.588a1 1 0 0 0 1.414 0L17 10.414a.997.997 0 0 0 0-1.41Z'/>"
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
