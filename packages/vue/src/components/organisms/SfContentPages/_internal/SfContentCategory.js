// @vue/component
export default {
  name: "SfContentCategory",
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
      items: []
    };
  },
  mounted() {
    const item = {
      title: this.title,
      items: this.items
    };
    this.$parent.items.push(item);
  },
  methods: {}
};
