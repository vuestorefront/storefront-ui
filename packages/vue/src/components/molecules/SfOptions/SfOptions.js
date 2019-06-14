import SfLabel from "../../atoms/SfLabel/SfLabel.vue";

export default {
  name: "SfOptions",
  components: {
    SfLabel
  },
  props: {
    options: {
      type: Array,
      required: true
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
