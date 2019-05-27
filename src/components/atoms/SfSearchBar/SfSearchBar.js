export default {
  name: "SfSearchBar",
  props: {
    placeholder: {
      type: String,
      default: "Search for..."
    },
    value: {
      type: [Number, String],
      default: null
    },
    icon: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearBtn() {
      return {
        "--clear-btn": "url(" + this.clearIcon + ")"
      };
    }
  }
};
