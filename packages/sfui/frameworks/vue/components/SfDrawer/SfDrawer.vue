<script lang="ts" setup>
import { type PropType, ref, toRefs, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { SfDrawerPlacement } from '@storefront-ui/vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String as PropType<`${SfDrawerPlacement}`>,
    default: SfDrawerPlacement.left,
  },
  tag: {
    type: String,
    default: '',
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
  'left-0': placement.value !== SfDrawerPlacement.right,
  'right-0': placement.value !== SfDrawerPlacement.left,
  'top-0': placement.value !== SfDrawerPlacement.bottom,
  'bottom-0': placement.value !== SfDrawerPlacement.top,
}));
</script>

<template>
  <component
    :is="tag || 'aside'"
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
