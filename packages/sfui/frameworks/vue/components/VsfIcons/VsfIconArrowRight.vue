
<template>
    <VsfIconBase :size="size" aria-label="arrow-right" viewBox="0 0 24 24" content="<path d='M15.705 5.705a.998.998 0 0 0-1.411 1.41L18.17 11H3a1 1 0 1 0 0 2h15.17l-3.88 3.88a1 1 0 0 0 1.415 1.415l5.588-5.588a1 1 0 0 0 0-1.414l-5.588-5.588Z'/><path d='M15.705 5.705a.998.998 0 0 0-1.411 1.41L18.17 11H3a1 1 0 1 0 0 2h15.17l-3.88 3.88a1 1 0 0 0 1.415 1.415l5.588-5.588a1 1 0 0 0 0-1.414l-5.588-5.588Z'/>"/>
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