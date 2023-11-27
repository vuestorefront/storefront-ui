<template>
  <div class="flex flex-col mt-4 custom-block">
    <div class="flex justify-end text-sm" v-if="showSource">
      <button
        @click="tab = 1"
        class="px-3 py-2 border-b-2"
        :class="[
          tab === 1 ? 'text-black dark:text-white border-primary-600 dark:border-primary-600' : 'dark:border-zinc-700',
        ]"
      >
        Preview
      </button>
      <button
        @click="tab = 2"
        class="px-3 py-2 border-b-2"
        :class="[
          tab === 2 ? 'text-black dark:text-white border-primary-600 dark:border-primary-600' : 'dark:border-zinc-700',
        ]"
      >
        Code
      </button>
    </div>
    <div ref="wrapperRef" class="relative flex-1 flex flex-col">
      <div
        ref="previewElementRef"
        class="pt-4 flex-grow rounded overflow-hidden"
        :class="[tab === 1 ? 'flex' : 'hidden']"
        @mousedown="eventDownListener"
        @touchstart="eventDownListener"
      >
        <div class="absolute inset-0" v-show="isHandlerDragging"></div>
        <Generate
          :showcase-path="showcaseName"
          :allow="allow"
          class="flex-grow rounded"
          style="margin-top: 0"
          :no-paddings="noPaddings"
          :no-scale="noScale"
        />
        <div ref="handlerRef" class="select-none rounded-tr items-center hidden sm:flex" style="cursor: ew-resize">
          <Icon name="akar-icons:drag-vertical" class="pointer-events-none" />
        </div>
      </div>
      <div v-show="tab === 2 && showSource" class="relative">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  showcaseName: {
    type: String,
    default: undefined,
  },
  noPaddings: {
    type: Boolean,
    default: false,
  },
  noScale: {
    type: Boolean,
    default: false,
  },
  allow: {
    type: String,
    default: undefined,
  },
  showSource: {
    type: Boolean,
    default: true,
  },
});

const tab = ref(1);
const wrapperRef = ref(null);
const handlerRef = ref(null);
const previewElementRef = ref(null);
const isHandlerDragging = ref(false);

const eventDownListener = (e) => {
  if (e.target === handlerRef.value) {
    isHandlerDragging.value = true;
  }
};

const eventUpListener = () => {
  isHandlerDragging.value = false;
};

const eventMoveListener = (e) => {
  if (!isHandlerDragging.value) return false;

  const containerOffsetLeft = wrapperRef.value.getBoundingClientRect().left;
  const pointerRelativeXpos = (e?.clientX || (e?.touches[0] && e?.touches[0]?.pageX)) - containerOffsetLeft;
  const minWidth = 386;

  previewElementRef.value.style.maxWidth = `${Math.max(minWidth, pointerRelativeXpos)}px`;
};

onMounted(() => {
  document.addEventListener('mousemove', eventMoveListener);
  document.addEventListener('touchmove', eventMoveListener);
  document.addEventListener('mouseup', eventUpListener);
  document.addEventListener('touchup', eventUpListener);

  // set initial width
  previewElementRef.value.style.maxWidth = '100%';
});

onUnmounted(() => {
  document.removeEventListener('mousemove', eventMoveListener);
  document.removeEventListener('touchmove', eventMoveListener);
  document.removeEventListener('mouseup', eventUpListener);
  document.removeEventListener('touchup', eventUpListener);
});
</script>
