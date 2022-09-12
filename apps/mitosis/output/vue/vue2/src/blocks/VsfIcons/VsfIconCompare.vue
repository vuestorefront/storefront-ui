<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'compare'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-compare",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path fill-rule='evenodd' clip-rule='evenodd' d='M20 4h-5.2c-.4-1.2-1.5-2-2.8-2-1.3 0-2.4.8-2.8 2H4c-.6 0-1 .4-1 1s.4 1 1 1h5.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H20c.6 0 1-.4 1-1s-.4-1-1-1Zm-8 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1ZM7.241 7.833a1.342 1.342 0 0 0-2.482 0L1 17c0 2.8 2.2 5 5 5s5-2.2 5-5L7.241 7.833ZM3 17l3-8 3 8H3Zm13.645-9.114a1.41 1.41 0 0 1 2.614-.011L23 17c0 2.8-2.2 5-5 5s-5-2.2-5-5l3.645-9.114ZM18 9l-3 8h6l-3-8Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 4h-5.2c-.4-1.2-1.5-2-2.8-2-1.3 0-2.4.8-2.8 2H4c-.6 0-1 .4-1 1s.4 1 1 1h5.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H20c.6 0 1-.4 1-1s-.4-1-1-1Zm-8 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1ZM7.241 7.833a1.342 1.342 0 0 0-2.482 0L1 17c0 2.8 2.2 5 5 5s5-2.2 5-5L7.241 7.833ZM3 17l3-8 3 8H3Zm13.645-9.114a1.41 1.41 0 0 1 2.614-.011L23 17c0 2.8-2.2 5-5 5s-5-2.2-5-5l3.645-9.114ZM18 9l-3 8h6l-3-8Z"
          />
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
