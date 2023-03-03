<template>
  <div class="flex flex-col">
    <div class="flex justify-end">
      <button
        @click="tab = 1"
        class="px-3 py-2 mr-2"
        :class="[tab === 1 ? 'text-green border-b border-green' : 'text-white']"
      >
        Preview
      </button>
      <button
        @click="tab = 2"
        class="px-3 py-2"
        :class="[tab === 2 ? 'text-green border-b border-green' : 'text-white']"
      >
        Source
      </button>
    </div>
    <div ref="wrapperRef" class="relative flex-1 flex flex-col">
      <div
        ref="previewElementRef"
        class="pt-4 flex-grow"
        :class="[tab === 1 ? 'flex' : 'hidden']"
        @mousedown="mouseDownListener"
      >
        <div class="absolute inset-0" v-show="isHandlerDragging"></div>
        <Generate :showcase-path="showcaseName" :allow="allow" class="flex-grow" style="margin-top: 0" />
        <div ref="handlerRef" class="w-2 bg-green select-none" style="cursor: ew-resize"></div>
      </div>
      <div v-show="tab === 2" class="relative">
        <button class="absolute top-2 right-2 bg-white text-black z-10 p-2 rounded" @click="copyToClipboard">
          Copy to clipboard
        </button>
        <div ref="sourceCodeRef" class="source-code">
          <slot />
        </div>
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
    },
    allow: {
      type: String,
      default: undefined,
    },
  },
  data: () => ({
    tab: 1,
    sourceCodeRef: undefined,
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
    },
    async copyToClipboard() {
      const element = this.$refs.sourceCodeRef;
      try {
        await navigator.clipboard.writeText(element.textContent);
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    },
  },
};
</script>

<style scoped>
.source-code pre {
  min-height: 150px;
}
</style>
