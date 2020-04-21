<template>
  <component
    :is="linkComponentTag"
    :href="linkComponentTag === 'a' ? link : undefined"
    :to="link && linkComponentTag !== 'a' ? link : undefined"
    class="sf-link"
    v-on="$listeners"
  >
    <!-- @slot -->
    <slot />
  </component>
</template>
<script>
export default {
  name: "SfLink",
  props: {
    /**
     * Tag link
     */
    linkTag: {
      type: String,
      default: "a",
    },
    /**
     * Page route
     */
    link: {
      type: [String, Object, Boolean],
      default: "",
    },
  },
  computed: {
    linkComponentTag() {
      let tag;
      this.linkTag && (tag = this.linkTag);
      ((this.link && typeof this.link === "object") || this.$router) &&
        (tag = "router-link"); // TODO set tag from config - 'router-link' or 'nuxt-link'
      return tag;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfLink.scss";
</style>
