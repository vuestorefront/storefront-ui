export default {
  name: "SfSelectOption",
  props: {
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  computed: {
    selected() {
      return this.$parent.selected;
    }
  },
  methods: {
    clicked(e) {
      this.$parent.html = this.$el.innerHTML;
      this.$parent.$emit("change", this.value);
      this.$parent.open = false;
    }
  }
};
