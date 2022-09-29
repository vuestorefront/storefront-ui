<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'log-in'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script lang="ts">
export interface VsfIconLogInProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-log-in",
  components: { VsfIconBase: VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      return "<path d='M11 2a1 1 0 1 0 0 2h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-8a1 1 0 1 0 0 2h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-8Z'/><path d='M10.25 7.293a1 1 0 0 1 1.414 0l3.913 3.913a1 1 0 0 1 .292.75V12a1 1 0 0 1-.58.908l-3.625 3.625a1 1 0 0 1-1.415-1.414L12.37 13H3a1 1 0 1 1 0-2h9.542L10.25 8.707a1 1 0 0 1 0-1.414Z'/>";
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
