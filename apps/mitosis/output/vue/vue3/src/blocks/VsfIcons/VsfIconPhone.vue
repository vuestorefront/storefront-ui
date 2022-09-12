<template>
  <vsf-icon-base
    viewBox="0 0 40 40"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'phone'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script lang="ts">
export interface VsfIconPhoneProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-phone",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      return "<path d='M28.051 36.612a9.005 9.005 0 0 1-4.866-1.416l-.05-.034A67.636 67.636 0 0 1 4.784 16.83a9.195 9.195 0 0 1-1.4-5.9 9.032 9.032 0 0 1 2.6-5.4l1.033-1.033c1.55-1.55 4.283-1.55 5.833 0l4.35 4.35c.383.383.683.833.9 1.333.2.5.317 1.033.317 1.583s-.1 1.083-.317 1.583c-.2.5-.517.95-.9 1.334a.794.794 0 0 0-.233.566c0 .217.083.417.233.567l6.95 6.95c.3.3.817.3 1.117 0 .4-.383.833-.683 1.333-.9 1-.416 2.15-.416 3.15 0 .5.217.95.517 1.333.9l4.35 4.35c.384.384.684.834.9 1.334.2.5.317 1.033.317 1.583s-.1 1.083-.317 1.583c-.216.5-.516.95-.9 1.334l-1.016 1.033A9.125 9.125 0 0 1 29 36.58c-.333.033-.65.05-.983.05l.033-.017Zm-18.117-30a.794.794 0 0 0-.566.234L8.334 7.879a5.69 5.69 0 0 0-1.633 3.417 5.73 5.73 0 0 0 .867 3.683A64.446 64.446 0 0 0 25 32.395h.017v.034c1.05.65 2.366.966 3.65.816a5.69 5.69 0 0 0 3.416-1.633l1.034-1.033s.133-.167.166-.267c.034-.1.067-.2.067-.3 0-.1-.017-.2-.066-.3a.66.66 0 0 0-.167-.25l-4.35-4.35s-.167-.133-.267-.166a.752.752 0 0 0-.6 0c-.1.033-.183.1-.267.183-1.55 1.55-4.266 1.55-5.833 0l-6.95-6.95a4.099 4.099 0 0 1-1.217-2.917c0-1.1.434-2.15 1.217-2.917a.82.82 0 0 0 .167-.25c.033-.1.066-.2.066-.3 0-.1-.016-.2-.066-.3a.659.659 0 0 0-.167-.25l-4.35-4.35a.794.794 0 0 0-.567-.233v-.05Z'/>";
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
