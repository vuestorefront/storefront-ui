export default {
  name: "SfOptions",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: "text",
      validator: val => ["text", "color", "image"].includes(val)
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    isTypeColor() {
      return this.type === "color";
    },
    isTypeImage() {
      return this.type === "image";
    },
    isTypeText() {
      return this.type === "text" && !this.isTypeColor && !this.isTypeImage;
    }
  },
  methods: {
    setActiveValue(value) {
      this.$emit("input", value);
    },
    isOptionSelected(value) {
      return this.value === value;
    }
  }
};
