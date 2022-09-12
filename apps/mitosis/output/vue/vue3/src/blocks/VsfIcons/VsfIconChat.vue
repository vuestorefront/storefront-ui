<template>
  <vsf-icon-base
    viewBox="0 0 40 40"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'chat'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script lang="ts">
export interface VsfIconChatProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-chat",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      return "<path fill-rule='evenodd' clip-rule='evenodd' d='M5.01 36.666c-.434 0-.867-.166-1.184-.483-.5-.5-.633-1.25-.333-1.9l3.733-7.85a15.438 15.438 0 0 1-1.883-7.083 15.714 15.714 0 0 1 1.966-7.984 15.709 15.709 0 0 1 5.75-5.883 15.56 15.56 0 0 1 7.917-2.15h.05c2.4 0 4.817.567 6.967 1.633a15.656 15.656 0 0 1 5.533 4.584c1.45 1.933 2.45 4.2 2.9 6.566a15.57 15.57 0 0 1-.333 7.167c-.667 2.317-1.867 4.5-3.5 6.267a15.85 15.85 0 0 1-5.917 4.05c-2.25.866-4.717 1.2-7.1.983-2.1-.2-4.15-.833-6-1.833l-7.833 3.733a1.559 1.559 0 0 1-.717.167l-.017.016Zm15.966-30c-2.183 0-4.333.584-6.217 1.7A12.299 12.299 0 0 0 10.243 13a12.375 12.375 0 0 0-1.55 6.283c.05 2.183.7 4.333 1.85 6.2.3.483.333 1.083.083 1.6l-2.083 4.383 4.383-2.083a1.656 1.656 0 0 1 1.6.083c1.617 1 3.467 1.634 5.35 1.8a12.374 12.374 0 0 0 5.6-.766 12.339 12.339 0 0 0 4.667-3.184 12.352 12.352 0 0 0 2.75-4.933c.516-1.833.616-3.783.266-5.65a12.345 12.345 0 0 0-2.283-5.167 12.281 12.281 0 0 0-4.35-3.6c-1.7-.85-3.6-1.25-5.5-1.283h-.033l-.017-.017Z'/>";
    },
  },

  methods: {
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>
