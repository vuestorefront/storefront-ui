<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    content="<path fill-rule='evenodd' clip-rule='evenodd' d='M6.41 8.291c.39.39 1.02.39 1.41 0l3.885-3.875 3.885 3.876A.998.998 0 0 0 17 6.88l-4.588-4.587a1 1 0 0 0-1.414 0L6.41 6.88a.998.998 0 0 0 0 1.411ZM17 15.71a.998.998 0 0 0-1.41 0l-3.885 3.875-3.884-3.876a.998.998 0 0 0-1.41 1.412l4.587 4.587a1 1 0 0 0 1.414 0L17 17.12a.998.998 0 0 0 0-1.411Z'/>"
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
