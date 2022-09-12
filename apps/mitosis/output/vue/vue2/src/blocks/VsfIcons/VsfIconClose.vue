<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'close'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-close",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path d='M18.295 7.115a.997.997 0 1 0-1.41-1.41L12 10.59 7.115 5.705a.997.997 0 0 0-1.41 1.41L10.59 12l-4.885 4.885a.997.997 0 0 0 1.41 1.41L12 13.41l4.885 4.885a.997.997 0 1 0 1.41-1.41L13.41 12l4.885-4.885Z'/><path d='M18.295 7.115a.997.997 0 1 0-1.41-1.41L12 10.59 7.115 5.705a.997.997 0 0 0-1.41 1.41L10.59 12l-4.885 4.885a.997.997 0 0 0 1.41 1.41L12 13.41l4.885 4.885a.997.997 0 1 0 1.41-1.41L13.41 12l4.885-4.885Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path d="M18.295 7.115a.997.997 0 1 0-1.41-1.41L12 10.59 7.115 5.705a.997.997 0 0 0-1.41 1.41L10.59 12l-4.885 4.885a.997.997 0 0 0 1.41 1.41L12 13.41l4.885 4.885a.997.997 0 1 0 1.41-1.41L13.41 12l4.885-4.885Z" />
          <path d="M18.295 7.115a.997.997 0 1 0-1.41-1.41L12 10.59 7.115 5.705a.997.997 0 0 0-1.41 1.41L10.59 12l-4.885 4.885a.997.997 0 0 0 1.41 1.41L12 13.41l4.885 4.885a.997.997 0 1 0 1.41-1.41L13.41 12l4.885-4.885Z" />
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
