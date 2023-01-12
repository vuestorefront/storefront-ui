<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="basket"
    content="<path d='M17.7 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M1 3a1 1 0 0 1 1-1h2.307a2.5 2.5 0 0 1 2.436 1.938L6.988 5h12.59a2.5 2.5 0 0 1 2.426 3.106l-1.75 7A2.5 2.5 0 0 1 17.83 17H9.693a2.5 2.5 0 0 1-2.436-1.938L4.794 4.388A.5.5 0 0 0 4.307 4H2a1 1 0 0 1-1-1Zm6.45 4 1.756 7.612a.5.5 0 0 0 .487.388h8.136a.5.5 0 0 0 .485-.379l1.75-7A.5.5 0 0 0 19.579 7H7.449Z'/>"
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
