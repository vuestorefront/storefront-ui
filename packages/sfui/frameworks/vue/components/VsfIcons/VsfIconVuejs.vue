<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="vuejs"
    content="<path d='M18.526 2.3H14.75L12 6.65 9.643 2.3H1l11 18.843L23 2.3h-4.474ZM3.736 3.871h2.641L12 13.604l5.618-9.733h2.642L12 18.024 3.735 3.871Z'/>"
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
