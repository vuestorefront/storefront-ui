<script lang="ts" setup>
import { PropType, toRefs } from 'vue';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { VsfNavigationTopVariant } from './types';
import VsfButton, { VsfButtonVariants } from '../VsfButton';
import { VsfIconClose } from '../VsfIcons';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<VsfNavigationTopVariant>,
    default: VsfNavigationTopVariant.auto,
  },
});
const { modelValue } = toRefs(props);
const emit = defineEmits<{
  (e: 'update:modelValue', val: boolean): void;
}>();

const navigationTopRef = ref(null);
const onClose = () => emit('update:modelValue', !modelValue.value);

onClickOutside(navigationTopRef, onClose);
</script>

<template>
  <nav v-if="modelValue" ref="navigationTopRef" class="vsf-navigation-top" data-testid="navigation-top">
    <!-- TODO: use greyscale prop button variant -->
    <VsfButton
      icon
      :variant="VsfButtonVariants.tertiary"
      class="vsf-navigation-top__close"
      data-testid="navigation-top-close-button"
      @click="onClose"
    >
      <slot name="buttonClose"><VsfIconClose /></slot>
    </VsfButton>
    <div
      :class="[
        'vsf-navigation-top__wrapper',
        variant !== VsfNavigationTopVariant.none && `vsf-navigation-top__wrapper--${variant}`,
      ]"
    >
      <slot />
    </div>
  </nav>
</template>
