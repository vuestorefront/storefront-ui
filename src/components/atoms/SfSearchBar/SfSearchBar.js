export default {
  name: "SfSearchBar",
  props: {
    placeholder: {
      type: String,
      default: "Search for items"
    },
    iconSrc: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: "Search image"
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    searchValue: function(value) {
      this.$emit("input", value);
    }
  }
};
