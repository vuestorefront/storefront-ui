<template>
  <component :is="tag" class="sf-highlight" v-html="text" />
</template>
<script>
export default {
  name: "SfHighlight",
  props: {
    /**
     * HTML tag for content
     */
    tag: {
      type: String,
      default: "p",
    },
    /**
     * Content of highlight
     */
    content: {
      type: String,
      default: "",
    },
    /**
     * Content to highlight
     */
    highlighted: {
      type: String,
      default: "",
    },
  },
  computed: {
    text() {
      if (!this.highlighted) return this.content;
      return this.content.replace(
        new RegExp(this.highlighted, "gi"),
        (match) => {
          return `<span>${match}</span>`;
        }
      );
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfHighlight.scss";
</style>
