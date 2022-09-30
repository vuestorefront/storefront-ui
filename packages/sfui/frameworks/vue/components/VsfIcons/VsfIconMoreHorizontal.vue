
<template>
    <VsfIconBase :size="size" aria-label="more-horizontal" viewBox="0 0 24 24" content="<path d='M12 14a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 14Zm4-2a2 2 0 1 0 4.001-.001A2 2 0 0 0 16 12Zm-8 0a2 2 0 1 0-4.001.001A2 2 0 0 0 8 12Z'/>"/>
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