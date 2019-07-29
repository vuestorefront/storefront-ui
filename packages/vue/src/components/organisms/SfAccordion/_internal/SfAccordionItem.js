export default {
  name: "SfAccordionItem",
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    header: {
      type: String,
      default: ""
    },
    selected: {
      type: String,
      default: ""
    },
    contentItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onHeaderClick() {
      this.$parent.$emit("toggle", this._uid);
    },
    onContentItemClick(id) {
      this.$parent.$emit("click", id);
    }
  }
};
