<script lang="ts" setup>
import { provide, defineEmits, ref, watch } from 'vue';
import type { PropType } from 'vue';
import { useWindowSize, useElementSize } from '@vueuse/core';
import VsfSlider from '../VsfSlider/VsfSlider.vue';
import VsfDivider from '../VsfDivider/VsfDivider.vue';
import { VsfTabsInjectionKey } from './types';
import { VsfSliderNavigation } from '../VsfSlider/types';
import { VsfButtonSizes } from '../VsfButton/types';

const props = defineProps({
  modelValue: {
    type: [Number, String, Symbol],
    default: '',
  },
  size: {
    type: String as PropType<VsfButtonSizes>,
    default: VsfButtonSizes.base,
  },
});

const tabs = ref(null);

const emit = defineEmits<{
  (event: 'update:modelValue', param: number | string | symbol): void;
}>();

const onChange = (uid: number | string | symbol) => {
  emit('update:modelValue', uid);
};

provide(VsfTabsInjectionKey, { props, onChange });

const { width: windowWidth } = useWindowSize();
const { width: tabsWidth } = useElementSize(tabs);
const showArrows = ref(false);

watch([windowWidth, tabsWidth], () => {
  if (windowWidth < tabsWidth) {
    showArrows.value = true;
  }
});
</script>

<template>
  <!-- TODO: When VsfSlider is refactored pass showArrow value to the component to show arrows when needed -->
  <VsfSlider
    ref="tabs"
    class="vsf-tabs"
    :draggable="{ sensitivity: 3 }"
    scroll-snap
    :navigation="VsfSliderNavigation.floating"
    data-testid="tabs"
    role="tablist"
  >
    <slot />
  </VsfSlider>
  <VsfDivider />
</template>
