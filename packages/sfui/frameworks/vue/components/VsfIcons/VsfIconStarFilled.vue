<template>
  <VsfIconBase :size="size" viewBox="0 0 24 24" data-testid="star-filled"
    ><path
      d="m12 18.275-4.15 2.5a.908.908 0 0 1-.575.15.966.966 0 0 1-.525-.2 1.2 1.2 0 0 1-.35-.437.876.876 0 0 1-.05-.588l1.1-4.725L3.775 11.8a.955.955 0 0 1-.312-.513.99.99 0 0 1 .037-.562 1.07 1.07 0 0 1 .3-.45c.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 0 1-.275 1.075l-3.675 3.175 1.1 4.725a.875.875 0 0 1-.05.588 1.2 1.2 0 0 1-.35.437.966.966 0 0 1-.525.2.908.908 0 0 1-.575-.15l-4.15-2.5Z"
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
