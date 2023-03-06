<template>
  <div class="relative">
    <Transition
      enter-class="scale-75 opacity-75"
      enter-active-class="transform transition-all duration-100"
      enter-to-class="scale-100"
      leave-class="scale-100"
      leave-to-class="scale-75 opacity-75"
      leave-active-class="transform transition-all duration-100"
      mode="out-in"
    >
      <button
        :key="copied"
        class="absolute top-2 right-2 text-white z-10 px-2 py-1 rounded flex items-center"
        :class="{
          'text-green-500': copied,
        }"
        @click="copyToClipboard"
        aria-label="Copy to clipboard"
      >
        <iconify-icon v-if="!copied" icon="ri:file-copy-line" height="24" />
        <iconify-icon v-else icon="ri:check-line" height="24" />
      </button>
    </Transition>
    <div ref="sourceCodeRef" class="source-code">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    async copyToClipboard() {
      const element = this.$refs.sourceCodeRef;
      try {
        await navigator.clipboard.writeText(element.textContent);
        console.log('Content copied to clipboard');
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 1500);
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
