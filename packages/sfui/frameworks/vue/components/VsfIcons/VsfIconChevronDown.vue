<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="chevron-down"
    content="<path d='M7.82 8.999a.998.998 0 0 0-1.41 1.412l4.588 4.587a1 1 0 0 0 1.414 0L17 10.411a.998.998 0 0 0-1.41-1.412l-3.885 3.876L7.82 9Z'/><path d='M7.82 8.999a.998.998 0 0 0-1.41 1.412l4.588 4.587a1 1 0 0 0 1.414 0L17 10.411a.998.998 0 0 0-1.41-1.412l-3.885 3.876L7.82 9Z'/>"
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
