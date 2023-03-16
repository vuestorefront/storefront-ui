<template>
  <VsfIconBase :size="size" viewBox="0 0 24 24" data-testid="shopping-cart-load"
    ><path
      d="M17.7 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm8.594-14.294a.998.998 0 0 0-1.41-1.413L15 8.17V3a1 1 0 1 0-2 0v5.17l-1.88-1.88a1 1 0 1 0-1.415 1.415l3.588 3.588a1 1 0 0 0 1.414 0l3.587-3.587Z" /><path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 3a1 1 0 0 1 1-1h2.307a2.5 2.5 0 0 1 2.436 1.938l2.463 10.674a.5.5 0 0 0 .487.388h8.136a.5.5 0 0 0 .485-.379l2.216-8.864a1 1 0 1 1 1.94.486l-2.216 8.863A2.5 2.5 0 0 1 17.83 17H9.693a2.5 2.5 0 0 1-2.436-1.938L4.794 4.388A.5.5 0 0 0 4.307 4H2a1 1 0 0 1-1-1Z"
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
