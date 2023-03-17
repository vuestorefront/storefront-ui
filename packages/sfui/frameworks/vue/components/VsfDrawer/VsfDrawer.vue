<script lang="ts" setup>
import { type PropType, ref, toRefs, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { VsfDrawerPlacement } from '@storefront-ui/vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String as PropType<`${VsfDrawerPlacement}`>,
    default: VsfDrawerPlacement.left,
  },
  tag: {
    type: String,
    default: 'aside',
  },
  disableClickAway: {
    type: Boolean,
    default: false,
  },
  disableEsc: {
    type: Boolean,
    default: false,
  },
});

const { disableClickAway, disableEsc, placement } = toRefs(props);
const emit = defineEmits<{
  (event: 'update:modelValue', isOpen: boolean): void;
}>();

const drawerRef = ref();

onClickOutside(drawerRef, () => {
  if (disableClickAway.value) return;
  emit('update:modelValue', false);
});

const onEscKeyDown = () => {
  if (disableEsc.value) return;
  emit('update:modelValue', false);
};

const placementClasses = computed(() => ({
  'left-0': placement.value !== VsfDrawerPlacement.right,
  'right-0': placement.value !== VsfDrawerPlacement.left,
  'top-0': placement.value !== VsfDrawerPlacement.bottom,
  'bottom-0': placement.value !== VsfDrawerPlacement.top,
}));
</script>

<template>
  <component
    :is="tag"
    v-if="modelValue"
    ref="drawerRef"
    class="fixed"
    :class="placementClasses"
    data-testid="drawer"
    tabindex="-1"
    @keydown.esc="onEscKeyDown"
  >
    <slot />
  </component>
</template>
