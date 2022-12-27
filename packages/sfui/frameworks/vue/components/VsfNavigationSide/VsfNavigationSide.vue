<script lang="ts" setup>
import VsfSideSheet from '../VsfSideSheet/VsfSideSheet.vue';
import VsfNavbarTop from '../VsfNavbarTop/VsfNavbarTop.vue';
import VsfNavbarTopAction from '../VsfNavbarTop/VsfNavbarTopAction.vue';
import VsfNavbarTopActionGroup from '../VsfNavbarTop/VsfNavbarTopActionGroup.vue';
import { VsfIconClose, VsfIconLogo } from '../../components/VsfIcons';

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  overlayVisible: {
    type: Boolean,
    default: false,
  },
  leftSide: {
    type: Boolean,
    default: true,
  },
  permanent: {
    type: Boolean,
    default: false,
  },
  logoLink: {
    type: String,
    default: '',
  },
  logoAriaLabel: {
    type: String,
    default: '',
  },
  closeAriaLabel: {
    type: String,
    default: '',
  },
});

defineEmits<{
  (event: 'update:modelValue', param: string): void;
}>();
</script>

<template>
  <VsfSideSheet
    class="vsf-navigation-side"
    :overlay-visible="overlayVisible"
    :with-button="false"
    :permanent="permanent"
    :left-side="leftSide"
    :open="modelValue"
    data-testid="navigation-side"
    @close="$emit('update:modelValue', false)"
  >
    <slot name="navigation">
      <VsfNavbarTop filled class="vsf-navigation-side__navbar">
        <!-- TODO: Replace with Link component when ready -->
        <a
          :href="logoLink"
          :aria-label="logoAriaLabel"
          class="flex items-center text-white mx-0 h-8 md:h-10 lg:h-7"
          data-testid="navigation-side-logo"
        >
          <VsfIconLogo viewBox="0 0 205 28" class="!w-[12.5rem] !h-[1.75rem]" />
        </a>
        <VsfNavbarTopActionGroup>
          <VsfNavbarTopAction
            v-if="!permanent"
            data-testid="navigation-side-close-button"
            :aria-label="closeAriaLabel"
            icon
            @click="$emit('update:modelValue', false)"
          >
            <VsfIconClose />
          </VsfNavbarTopAction>
        </VsfNavbarTopActionGroup>
      </VsfNavbarTop>
    </slot>
    <slot />
    <div class="vsf-navigation-side__banner">
      <slot name="banner" />
    </div>
  </VsfSideSheet>
</template>
