export default {
  name: "SfContentCategory",
  inject: ["categories"],
  provide() {
    const pages = {};
    Object.defineProperty(pages, "updatePages", {
      value: this.updatePages
    });
    return { pages };
  },
  props: {
    /**
     * Category title
     */
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      pages: []
    };
  },
  computed: {},
  methods: {
    updatePages(page) {
      this.pages.push(page);
    }
  },
  mounted() {
    const category = {
      title: this.title,
      pages: this.pages
    };
    this.categories.updateCategories(category);
  }
};
