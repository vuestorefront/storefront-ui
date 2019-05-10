export default {
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
      return this.$parent.$props.value;
    },
    active() {
      return this.selected === this.value;
    },
    open() {
      return this.$parent.open;
    }
  },
  methods: {
    clicked(e) {
      this.$parent.open = !this.$parent.open;
      this.$parent.$emit("input", this.value);
    }
  }
};
