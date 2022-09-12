<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'checkbox-unchecked'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script>
import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-checkbox-unchecked",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      /* IF-vue */
      return "<path d='M18.5 5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h13ZM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z'/><path d='M18.5 5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h13ZM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z'/>";
      /* ENDIF-vue */

      /* IF-react */

      return (
        <>
          <path d="M18.5 5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h13ZM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z" />
          <path d="M18.5 5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h13ZM5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z" />
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
