<template>
  <div class="text-xs">
    <div
      role="button"
      tabindex="0"
      @click="copyColorToClipboard"
      @keydown.enter="copyColorToClipboard"
      class="relative h-12 rounded border dark:border-zinc-700 group"
      :style="{
        backgroundColor: `oklch(${oklchColor})`,
      }"
    >
      <p class="hidden group-hover:inline-flex group-active:inline-flex group-focus:inline-flex absolute inset-0 m-0 px-2 items-center bg-black/20 backdrop-blur-md" :class="{ 'text-black': parseInt(shade) <= 400 }">
        <template v-if="copied">
          <span>Copied&nbsp;</span>
          <span><Icon name="ri:check-line" height="16" class="text-green" /></span>
        </template>
        <template v-else>
          oklch({{oklchColor}})&nbsp;
          <Icon name="ri:file-copy-fill" height="16" class="text-green" />
        </template>
      </p>
    </div>

    <div role="button" tabindex="0" @click="copyColorNameToClipboard" @keydown.enter="copyColorNameToClipboard" class="pt-2 pb-1">
      <template v-if="copiedName">
        Copied&nbsp;
        <Icon name="ri:check-line" height="16" class="text-green" />
      </template>
      <template v-else>
        {{ name }}&nbsp;
        <Icon name="ri:file-copy-fill" height="16" class="text-green" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    oklchColor: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    shade: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      copied: false,
      copiedName: false,
    };
  },
  methods: {
    async copyColorToClipboard() {
      await navigator.clipboard.writeText(`oklch(${this.oklchColor})`);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
    async copyColorNameToClipboard() {
      await navigator.clipboard.writeText(this.name);
      this.copiedName = true;
      setTimeout(() => {
        this.copiedName = false;
      }, 1000);
    },
  },
};
</script>
