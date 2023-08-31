<template>
  <div role="button" tabindex="0" @click="copyColorToClipboard" @keydown.enter="copyColorToClipboard">
    <div
      class="h-10 rounded border dark:border-zinc-700 mb-1"
      :style="{
        backgroundColor: `rgb(${rgbColor})`,
      }"
    />
    <p v-if="copied" class="flex items-center text-xs">
      <iconify-icon icon="ri:check-line" height="16" class="text-green" />
      Copied
    </p>
    <p v-else class="text-xs flex items-center justify-between">
      <span>{{ name }}</span>
      <span class="font-mono">{{ hex }}</span>
    </p>
  </div>
</template>

<script>
function componentToHex(c) {
  var hex = parseInt(c).toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}
export default {
  props: {
    rgbColor: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    async copyColorToClipboard() {
      await navigator.clipboard.writeText(this.name);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
  },
  computed: {
    hex() {
      const [r, g, b] = this.rgbColor.split(' ');
      return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    },
  },
};
</script>
