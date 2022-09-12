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
    <button v-bind="attributes" class="border">
      {{ text }}
    </button>
  </template>
</template>

<script lang="ts">
export interface ButtonProps {
  attributes?: any;
  text?: string;
  link?: string;
  openLinkInNewTab?: boolean;
}

export default {
  name: "button",

  props: ["attributes", "text", "link", "openLinkInNewTab"],
};
</script>
