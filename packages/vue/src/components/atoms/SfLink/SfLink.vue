<template>
  <component
    :is="linkComponentTag"
    :href="linkComponentTag === 'a' ? link : undefined"
    :to="link && linkComponentTag !== 'a' ? link : undefined"
    class="sf-link"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>
<script>
export default {
  name: "SfLink",
  props: {
    linkTag: {
      type: String,
      default: "a",
    },
    /**
     * Link to product page
     */
    link: {
      type: [String, Object, Boolean],
      default: "",
    },
  },
  computed: {
    linkComponentTag() {
      let tag;
      if (this.linkTag) {
        return (tag = this.linkTag);
      }
      if (this.link) {
        return typeof this.link === "object" || this.$router
          ? (tag = "router-link")
          : (tag = "nuxt-link");
      }
      return tag;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfLink.scss";
</style>
