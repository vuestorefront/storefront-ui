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
  methods: {},
  mounted() {
    const item = {
      title: this.title,
      items: this.items
    };
    this.$parent.items.push(item);
  }
};
