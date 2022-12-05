<script lang="ts" setup>
import { ref } from 'vue';
import VsfOverlay from '../VsfOverlay/VsfOverlay.vue';
import VsfButton from '../VsfButton/VsfButton.vue';
import { VsfIconClose } from '../../components/VsfIcons';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  open: {
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
  withButton: {
    type: Boolean,
    default: true,
  },
  permanent: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (event: 'close'): void;
}>();

const target = ref(null);

onClickOutside(target, () => {
  if (!props.overlayVisible) return;
  emit('close');
});
</script>

<template>
  <div class="vsf-side-sheet" data-testid="side-sheet">
    <VsfOverlay
      v-if="overlayVisible && !permanent && open"
      :visible="overlayVisible"
      data-testid="side-sheet-overlay"
      class="vsf-side-sheet__overlay"
    />
    <transition :name="`vsf-side-sheet__slide-${leftSide ? 'left' : 'right'}-vue`" appear>
      <aside
        v-if="permanent || open"
        ref="target"
        class="vsf-side-sheet__aside"
        :class="{
          'vsf-side-sheet__aside--fixed': !permanent,
          'vsf-side-sheet__aside--right-side': !leftSide,
          'vsf-side-sheet__aside--left-side': leftSide,
        }"
        data-testid="side-sheet-aside"
      >
        <!-- TODO: replace with VsfButton pure version after refactor -->
        <VsfButton
          v-if="withButton && !permanent"
          variant="tertiary"
          class="vsf-side-sheet__aside__close-button"
          data-testid="side-sheet-close-button"
          @keyup.esc="$emit('close')"
          @click="$emit('close')"
        >
          <VsfIconClose />
        </VsfButton>
        <slot />
      </aside>
    </transition>
  </div>
</template>
