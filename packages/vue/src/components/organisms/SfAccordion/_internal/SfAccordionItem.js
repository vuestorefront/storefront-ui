export default {
  name: "SfAccordionItem",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    onHeaderClick() {
      this.$parent.$emit("toggle", this._uid);
    }
  }
};
