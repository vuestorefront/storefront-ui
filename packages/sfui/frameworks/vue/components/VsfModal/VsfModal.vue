<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useTrapFocus, InitialFocusType } from '@storefront-ui/vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
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
const { disableClickAway, disableEsc, modelValue } = toRefs(props);
const emit = defineEmits<{
  (event: 'update:modelValue', isOpen: boolean): void;
}>();

const modalRef = ref<HTMLElement>();

onClickOutside(modalRef, () => {
  if (disableClickAway.value) return;
  emit('update:modelValue', false);
});

const onEscKeyDown = () => {
  if (disableEsc.value) return;
  emit('update:modelValue', false);
};

useTrapFocus(modalRef, {
  activeState: modelValue,
  initialFocus: InitialFocusType.autofocus,
  initialFocusContainerFallback: true,
});
</script>

<template>
  <component
    :is="tag || 'div'"
    v-if="modelValue"
    ref="modalRef"
    aria-modal="true"
    data-testid="modal"
    tabindex="-1"
    class="fixed inset-0 w-fit h-fit m-auto p-6 pt-10 lg:p-10 border border-neutral-100 bg-white shadow-xl rounded-xl"
    @keydown.esc="onEscKeyDown"
  >
    <slot />
  </component>
</template>
