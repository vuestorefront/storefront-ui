<template>
  <template v-if="visible">
    <div
      @click="onClick($event)"
      :class="
        _classStringToObject(
          `w-full h-full top-0 bottom-0 left-0 right-0 bg-gray-500 opacity-50 ${positionClass}`
        )
      "
    ></div>
  </template>
</template>

<script lang="ts">
export interface VsfOverlayProps {
  visible?: boolean;
  absolute?: boolean;
  onClick?: (e: Event) => void;
}

const DEFAULT_VALUES = {};

export default {
  name: "vsf-overlay",

  props: ["absolute", "visible", "onClick"],

  computed: {
    positionClass() {
      return this.absolute ? "absolute" : "fixed";
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
