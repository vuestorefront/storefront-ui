<script lang="ts" setup>
import { provide } from 'vue';
import type { PropType } from 'vue';
import VsfScrollable from '../VsfScrollable/VsfScrollable.vue';
import VsfDivider from '../VsfDivider/VsfDivider.vue';
import { VsfTabsInjectionKey } from './types';
import { VsfScrollableNavigation } from '../VsfScrollable/types';
import { VsfButtonSize } from '../VsfButton/types';

const props = defineProps({
  modelValue: {
    type: [Number, String, Symbol],
    default: '',
  },
  size: {
    type: String as PropType<`${VsfButtonSize}`>,
    default: VsfButtonSize.base,
  },
});

const emit = defineEmits<{
  (event: 'update:modelValue', param: number | string | symbol): void;
}>();

const onChange = (uid: number | string | symbol) => {
  emit('update:modelValue', uid);
};

provide(VsfTabsInjectionKey, { props, onChange });
</script>

<template>
  <VsfScrollable
    class="vsf-tabs"
    :draggable="{ sensitivity: 3 }"
    scroll-snap
    :navigation="VsfScrollableNavigation.floating"
    data-testid="tabs"
    role="tablist"
  >
    <slot />
  </VsfScrollable>
  <VsfDivider />
</template>
