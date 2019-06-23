import "../../../utilities/transitions/transitions.scss";

export default {
  name: "SfInput",
  props: {
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    valid: {
      type: Boolean,
      default: true
    },
    errorMessage: {
      type: String,
      default: null
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  }
};
