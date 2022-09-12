<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'filter'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script lang="ts">
export interface VsfIconFilterProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-filter",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      return "<path d='M19 9c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.993 2.993 0 0 0-2.815 2H3a1 1 0 0 0 0 2h13.185A2.993 2.993 0 0 0 19 9Zm0-4a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2ZM9 9a2.993 2.993 0 0 0-2.815 2H3a1 1 0 1 0 0 2h3.185A2.993 2.993 0 0 0 9 15a2.993 2.993 0 0 0 2.815-2H21a1 1 0 1 0 0-2h-9.185A2.993 2.993 0 0 0 9 9Zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Zm10 2a2.993 2.993 0 0 0-2.815 2H3a1 1 0 1 0 0 2h13.185A2.994 2.994 0 0 0 19 21c1.654 0 3-1.346 3-3s-1.346-3-3-3Zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Z'/><path d='M19 9c1.654 0 3-1.346 3-3s-1.346-3-3-3a2.993 2.993 0 0 0-2.815 2H3a1 1 0 0 0 0 2h13.185A2.993 2.993 0 0 0 19 9Zm0-4a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2ZM9 9a2.993 2.993 0 0 0-2.815 2H3a1 1 0 1 0 0 2h3.185A2.993 2.993 0 0 0 9 15a2.993 2.993 0 0 0 2.815-2H21a1 1 0 1 0 0-2h-9.185A2.993 2.993 0 0 0 9 9Zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Zm10 2a2.993 2.993 0 0 0-2.815 2H3a1 1 0 1 0 0 2h13.185A2.994 2.994 0 0 0 19 21c1.654 0 3-1.346 3-3s-1.346-3-3-3Zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Z'/>";
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
