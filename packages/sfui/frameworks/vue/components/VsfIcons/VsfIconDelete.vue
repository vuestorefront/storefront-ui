<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    content="<path d='M13.6 1.8a2 2 0 0 0-3.2 0L9.5 3H4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2h-5.5l-.9-1.2Z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M8.328 21a2.5 2.5 0 0 1-2.494-2.322L5 7h14l-.834 11.678A2.5 2.5 0 0 1 15.672 21H8.328Zm0-2a.5.5 0 0 1-.499-.464L7.148 9h9.704l-.681 9.536a.5.5 0 0 1-.499.464H8.328Z'/><path d='M13.6 1.8a2 2 0 0 0-3.2 0L9.5 3H4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2h-5.5l-.9-1.2Z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M8.328 21a2.5 2.5 0 0 1-2.494-2.322L5 7h14l-.834 11.678A2.5 2.5 0 0 1 15.672 21H8.328Zm0-2a.5.5 0 0 1-.499-.464L7.148 9h9.704l-.681 9.536a.5.5 0 0 1-.499.464H8.328Z'/>"
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
