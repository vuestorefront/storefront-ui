<template>
  <a
    v-bind="attributes"
    role="button"
    v-if="link"
    :href="link"
    :target="openLinkInNewTab ? '_blank' : undefined"
  >
    {{ text }}
  </a>
  <button v-bind="attributes" class="border" v-else>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "button",

  props: ["attributes", "text", "link", "openLinkInNewTab"],
};
</script>
