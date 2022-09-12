<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'check'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-check",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path d='m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z'/><path d='m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z'/><path d='m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z'/><path d='m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
          <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
          <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
          <path d="m8 16.17-3.465-3.465A1 1 0 0 0 3.12 14.12l4.173 4.173a1 1 0 0 0 1.414 0L19.295 7.705a.997.997 0 0 0-1.41-1.41L8 16.17Z" />
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
