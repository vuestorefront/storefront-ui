<template>
  <VsfIconBase
    :size="size"
    viewBox="0 0 24 24"
    data-testid="visibility"
    content="<path d='M13.833 12a1.833 1.833 0 1 1-3.666 0 1.833 1.833 0 0 1 3.666 0Z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M12 5.217c4.033-.057 8.055 2.763 10.48 5.43a2.026 2.026 0 0 1 .002 2.701c-2.399 2.64-6.363 5.435-10.347 5.435h-.283c-3.97 0-7.935-2.795-10.332-5.434a2.027 2.027 0 0 1 0-2.702C3.945 7.98 7.966 5.159 12 5.217Zm-3.506 4.44a4.216 4.216 0 1 0 7.012 4.686 4.216 4.216 0 0 0-7.012-4.686Z'/>"
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
