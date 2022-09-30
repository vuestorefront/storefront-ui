<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'swap-data'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script lang="ts">
export interface VsfIconSwapDataProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-swap-data",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      return "<path d='M20.999 5a1 1 0 0 1 1 .998v5.145a1 1 0 1 1-2 0V8.414l-6.436 6.436a1 1 0 0 1-1.414-1.414L18.585 7h-2.73a1 1 0 1 1 0-2H21Zm-9.579 5.993a1 1 0 0 0-1.414-1.414L4 15.586v-2.729a1 1 0 1 0-2 0V18a1 1 0 0 0 1 1h5.143a1 1 0 1 0 0-2h-2.73l6.007-6.007Z'/><path d='M20.999 5a1 1 0 0 1 1 .998v5.145a1 1 0 1 1-2 0V8.414l-6.436 6.436a1 1 0 0 1-1.414-1.414L18.585 7h-2.73a1 1 0 1 1 0-2H21Zm-9.579 5.993a1 1 0 0 0-1.414-1.414L4 15.586v-2.729a1 1 0 1 0-2 0V18a1 1 0 0 0 1 1h5.143a1 1 0 1 0 0-2h-2.73l6.007-6.007Z'/>";
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
