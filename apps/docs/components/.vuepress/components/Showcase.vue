<template>
  <div class="flex flex-col mt-4">
    <div class="flex justify-end text-sm" v-if="showSource">
      <button
        @click="tab = 1"
        class="px-3 py-2 border-b-2 dark:border-zinc-700"
        :class="[tab === 1 ? 'text-black dark:text-white border-green dark:border-green' : '']"
      >
        Preview
      </button>
      <button
        @click="tab = 2"
        class="px-3 py-2 border-b-2 dark:border-zinc-700"
        :class="[tab === 2 ? 'text-black dark:text-white border-green dark:border-green' : '']"
      >
        Code
      </button>
    </div>
    <div ref="wrapperRef" class="relative flex-1 flex flex-col">
      <div
        ref="previewElementRef"
        class="pt-4 flex-grow rounded overflow-hidden"
        :class="[tab === 1 ? 'flex' : 'hidden']"
        @mousedown="mouseDownListener"
      >
        <div class="absolute inset-0" v-show="isHandlerDragging"></div>
        <Generate :showcase-path="showcaseName" :allow="allow" class="flex-grow rounded" style="margin-top: 0" />
        <div ref="handlerRef" class="select-none rounded-tr flex items-center" style="cursor: ew-resize">
          <iconify-icon icon="akar-icons:drag-vertical" class="pointer-events-none" />
        </div>
      </div>
      <div v-show="tab === 2 && showSource" class="relative">
        <SourceCode>
          <slot />
        </SourceCode>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showcaseName: {
      type: String,
      default: undefined,
      default: undefined,
    },
    allow: {
      type: String,
      default: undefined,
    },
    showSource: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    tab: 1,
    wrapperRef: undefined,
    handlerRef: undefined,
    previewElementRef: undefined,
    isHandlerDragging: false,
  }),
  mounted() {
    document.addEventListener('mousemove', this.mouseMoveListener);
    document.addEventListener('mouseup', this.mouseUpListener);
  },
  unmounted() {
    document.removeEventListener('mousemove', this.mouseMoveListener);
    document.removeEventListener('mouseup', this.mouseUpListener);
  },
  methods: {
    mouseDownListener(e) {
      if (e.target === this.$refs.handlerRef) {
        this.isHandlerDragging = true;
      }
    },
    mouseUpListener() {
      this.isHandlerDragging = false;
    },
    mouseMoveListener(e) {
      if (!this.isHandlerDragging) return false;

      const containerOffsetLeft = this.$refs.wrapperRef.getBoundingClientRect().left;
      const pointerRelativeXpos = e.clientX - containerOffsetLeft;
      const minWidth = 300;

      this.$refs.previewElementRef.style.maxWidth = `${Math.max(minWidth, pointerRelativeXpos)}px`;
      this.$refs.previewElementRef.style.maxWidth = `${Math.max(minWidth, pointerRelativeXpos)}px`;
    },
  },
};
</script>
