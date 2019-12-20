import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfInput",
  components: { SfIcon },
  inheritAttrs: false,
  props: {
    /**
     * Current input value (`v-model`)
     */
    value: {
      type: [String, Number],
      default: null
    },
    /**
     * Form input label
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Form input name
     */
    name: {
      type: String,
      default: null
    },
    /**
     * Validate value of form input
     */
    valid: {
      type: Boolean,
      default: undefined
    },
    /**
     * Error message value of form input. It will be appeared if `valid` is `true`.
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * Native input required attribute
     */
    required: {
      type: Boolean,
      default: false,
      description: "Native input required attribute"
    },
    /**
     * Native input disabled attribute
     */
    disabled: {
      type: Boolean,
      default: false,
      description: "Native input disabled attribute"
    }
  },
  data() {
    return {
      isPasswordVisible: false
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    },
    attrs() {
      return {
        ...this.$attrs
      };
    },
    isPasswordType() {
      return this.$attrs.type === "password";
    }
  },
  methods: {
    switchVisibilityPassword() {
      this.isPasswordVisible = !this.isPasswordVisible;
      this.attrs.type = this.isPasswordVisible ? "text" : "password";
      this.$emit("passwordVisibilityChanged", this.isPasswordVisible);
    }
  }
};
