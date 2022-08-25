<template>
  <div class="relative inline-flex flex-col items-center group">
    <slot />
    <div
      role="tooltip"
      :class="
        _classStringToObject(
          `w-max max-w-xs absolute justify-center items-center hidden mb-14 group-hover:flex z-50 bg-gray-500 font-body font-medium text-white text-sm leading-5 rounded-md px-3 py-1.5 ${tooltipClass}`
        )
      "
    >
      <div>{{ useLabelProp }}</div>
      <div
        :class="
          _classStringToObject(
            `absolute w-2 h-2 rotate-45 bg-gray-500 ${tooltipCaretClass}`
          )
        "
      ></div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

export const VsfTooltipTypes = Object.freeze({
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
});
const DEFAULT_VALUES = {
  label: "",
  type: VsfTooltipTypes.top,
};

export default {
  name: "vsf-tooltip",

  props: ["label", "type"],

  computed: {
    useLabelProp() {
      return this.label || DEFAULT_VALUES.label;
    },
    useTypeProp() {
      return this.type || DEFAULT_VALUES.type;
    },
    tooltipClass() {
      switch (this.useTypeProp) {
        case VsfTooltipTypes.bottom:
          return "left-1/2 -translate-x-1/2 translate-y-2 top-full";

        case VsfTooltipTypes.left:
          return "-left-2 -translate-x-full -translate-y-1/2 top-1/2";

        case VsfTooltipTypes.right:
          return "left-full translate-x-2 -translate-y-1/2 top-1/2";

        default:
          return "left-1/2 -translate-x-1/2 -translate-y-full -top-2";
      }
    },
    tooltipCaretClass() {
      switch (this.useTypeProp) {
        case VsfTooltipTypes.bottom:
          return "bottom-full -mb-1";

        case VsfTooltipTypes.left:
          return "left-full -ml-1";

        case VsfTooltipTypes.right:
          return "left-0 -ml-1";

        default:
          return "bottom-0 -mb-1";
      }
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
