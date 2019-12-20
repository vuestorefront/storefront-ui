export default {
  name: "SfBreadcrumbs",
  props: {
    /**
     * List of breadcrumbs (array of nested objects: `[ { text, route } ]`)
     */
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    last() {
      return this.breadcrumbs.length - 1;
    }
  },
  methods: {
    go(breadcrumb) {
      /**
       * Event for breadcrumb click, passes `breadcrumb.route` as value
       * @type {Event}
       */
      this.$emit("click", breadcrumb.route);
    }
  }
};
