export default {
  name: "SfCheckbox",
  model: {
    prop: "finalValue",
    event: "input"
  },
  props: {
    /**
     * Final value
     */
    finalValue: {
      type: [String, Boolean, Number, Object],
      default: false
    },
    /**
     * Unchecked value
     */
    uncheckedValue: {
      type: [String, Boolean, Number, Object],
      default: false
    },
    /**
     * Input value
     */
    value: {
      type: [String, Boolean, Number, Object],
      default: true
    },
    /**
     * Input id
     */
    id: {
      type: String,
      default: null
    },
    /**
     * Input name
     */
    name: {
      type: String,
      default: null
    }
  },
  methods: {
    change(checked) {
      /**
       * Event for select/unselect
       * @type {Event}
       */
      this.$emit("input", checked ? this.value : this.uncheckedValue);
    }
  }
};
