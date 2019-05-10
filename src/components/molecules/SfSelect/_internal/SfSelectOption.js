export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    active() {
      return this.selected === this.value;
    },
    selected() {
      return this.$parent.$props.value;
    }
  },
  methods: {
    clicked(e) {
      this.$parent.$emit("input", this.value);
      console.log(this);
    }
  }
};
