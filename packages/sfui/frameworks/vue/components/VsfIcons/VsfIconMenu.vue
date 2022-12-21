<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    content="<path d='M3 17a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Zm0-5a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Zm1-6a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Z'/><path d='M3 17a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Zm0-5a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1Zm1-6a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Z'/>"
  />
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import VsfIconBase from '../VsfIconBase/VsfIconBase.vue';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

defineProps({
  size: {
    type: String as PropType<VsfIconSizeEnum>,
    default: VsfIconSizeEnum.base,
  },
});
</script>
