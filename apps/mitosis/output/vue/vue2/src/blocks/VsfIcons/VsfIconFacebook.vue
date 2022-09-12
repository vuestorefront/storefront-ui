<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'facebook'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-facebook",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path d='m17.01 13.25.555-3.62h-3.473V7.282c0-.99.485-1.956 2.04-1.956h1.58V2.245S16.279 2 14.909 2c-2.86 0-4.73 1.734-4.73 4.872V9.63H7v3.62h3.18V22h3.912v-8.75h2.918Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path d="m17.01 13.25.555-3.62h-3.473V7.282c0-.99.485-1.956 2.04-1.956h1.58V2.245S16.279 2 14.909 2c-2.86 0-4.73 1.734-4.73 4.872V9.63H7v3.62h3.18V22h3.912v-8.75h2.918Z" />
        </>
      );
      /* ENDIF-react */
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
