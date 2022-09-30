
<template>
    <VsfIconBase :size="size" aria-label="lock" viewBox="0 0 24 24" content="<path fill-rule='evenodd' clip-rule='evenodd' d='M18.25 9.917h-.625V7.625a5.625 5.625 0 0 0-11.25 0v2.292H5.75a1.667 1.667 0 0 0-1.667 1.666v8.75A1.666 1.666 0 0 0 5.75 22h12.5a1.667 1.667 0 0 0 1.667-1.667v-8.75a1.667 1.667 0 0 0-1.667-1.666Zm-6.25 7.5a1.667 1.667 0 1 1 0-3.334 1.667 1.667 0 0 1 0 3.334ZM15.542 9.5a.417.417 0 0 1-.417.417h-6.25A.417.417 0 0 1 8.46 9.5V7.625a3.542 3.542 0 1 1 7.083 0V9.5Z'/>"/>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import VsfIconBase from '../VsfIconBase/VsfIconBase.vue';
import { VsfIconSizeEnum } from '../VsfIconBase/types';

defineProps({
    size: {
        type: String as PropType<VsfIconSizeEnum>,
        default: VsfIconSizeEnum.base
    }
});
</script>