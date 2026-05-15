<script lang="ts" setup>
import { type PropType, type ConcreteComponent, ref, toRefs, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { SfDrawerPlacement, twMerge, useTwMergeRoot } from '@storefront-ui/vue';

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
    type: [String, Object] as PropType<string | ConcreteComponent>,
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
defineOptions({
  inheritAttrs: false,
});
const { attrsWithoutClass } = useTwMergeRoot();

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
    v-if="modelValue"
    :is="tag"
    ref="drawerRef"
    :class="twMerge('fixed', placementClasses, $attrs.class)"
    data-testid="drawer"
    tabindex="-1"
    v-bind="attrsWithoutClass"
    @keydown.esc="onEscKeyDown"
  >
    <slot />
  </component>
</template>
