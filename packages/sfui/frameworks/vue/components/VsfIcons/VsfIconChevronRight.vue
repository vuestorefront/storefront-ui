<template>
  <VsfIconBase :size="size" viewBox="0 0 24 24" data-testid="chevron-right"
    ><path
      d="M8.705 17.297a.998.998 0 0 1-.001-1.41l3.876-3.885-3.876-3.885a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.588a.997.997 0 0 1-1.411 0Z"
  /></VsfIconBase>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfIconBase, VsfIconSize } from '@storefront-ui/vue';

defineProps({
  size: {
    type: String as PropType<`${VsfIconSize}`>,
    default: VsfIconSize.base,
  },
});
</script>
