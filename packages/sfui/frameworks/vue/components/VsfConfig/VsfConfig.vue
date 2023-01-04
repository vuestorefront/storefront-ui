<script lang="ts" setup>
import { provide, toRefs } from 'vue';
import type { ConcreteComponent, PropType } from 'vue';
import type { RouterLinkType } from '../VsfLink/VsfLink.vue';
import { useConfigName } from './types';

const props = defineProps({
  linkTag: {
    type: [String, Object] as PropType<'a' | ConcreteComponent | RouterLinkType>,
    default: undefined,
  },
});
const { linkTag } = toRefs(props);

provide(useConfigName('linkTag'), linkTag);
</script>

<template>
  <slot></slot>
</template>
