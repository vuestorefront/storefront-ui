import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfSearchBar",
  components: { SfIcon },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String],
      default: null
    }
  },
  methods: {
    clearSearchBar() {
      this.$emit("input", "");
      this.$el.blur();
    }
  }
};
