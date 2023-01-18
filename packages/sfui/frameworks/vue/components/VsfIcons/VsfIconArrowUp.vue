<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="arrow-up"
    content="<path d='M5.706 8.295a.998.998 0 0 0 1.41 1.411L11 5.83V21a1 1 0 1 0 2 0V5.83l3.88 3.88a1 1 0 0 0 1.415-1.415l-5.588-5.588a1 1 0 0 0-1.414 0L5.706 8.295Z'/><path d='M5.706 8.295a.998.998 0 0 0 1.41 1.411L11 5.83V21a1 1 0 1 0 2 0V5.83l3.88 3.88a1 1 0 0 0 1.415-1.415l-5.588-5.588a1 1 0 0 0-1.414 0L5.706 8.295Z'/>"
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
