<template>
  <template v-if="link">
    <a
      v-bind="attributes"
      role="button"
      :href="link"
      :target="openLinkInNewTab ? '_blank' : undefined"
    >
      {{ text }}
    </a>
  </template>

  <template v-else>
    <button v-bind="attributes" class="text-white flex-1 mt-28">
      {{ text }}
    </button>
  </template>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "button",

  props: ["attributes", "text", "link", "openLinkInNewTab"],
};
</script>
