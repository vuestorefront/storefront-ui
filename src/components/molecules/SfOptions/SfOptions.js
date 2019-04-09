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
    label: {
      type: String,
      default: null
    },
    image: {
      type: Boolean,
      default: false
    },
    color: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: null
    }
  },
  methods: {
    setActiveValue(value) {
      this.value = value;
    }
  }
};
