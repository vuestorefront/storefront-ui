// @vue/component
export default {
  name: "SfRadio",
  model: {
    prop: "selected",
    event: "input"
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
      default: ""
    }
  },
  computed: {
    isChecked() {
      return this.value === this.selected;
    }
  },
  methods: {
    inputHandler() {
      this.$emit("input", this.value);
    }
  }
};
