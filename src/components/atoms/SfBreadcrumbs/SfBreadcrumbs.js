export default {
  name: "SfBreadcrumbs",

  props: {
    /**
     * List of breadcrumbs (array of nested objects: `[ { text, link } ]`)
     */
    breadcrumbs: {
      type: Array,
      required: true
    }
  },

  computed: {
    last () {
      return this.breadcrumbs.length - 1
    }
  }
};
