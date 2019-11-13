import SfIcon from "../SfIcon/SfIcon.vue";

export default {
  name: "SfCheckbox",
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
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Array storing the checked values (usable for multiple grouped checkboxes).
     */
    selected: {
      type: Array,
      default: () => []
    }
  },
  components: {
    SfIcon
  },
  methods: {
    inputHandler() {
      const selected = [...this.selected];
      const index = selected.indexOf(this.value);
      if (index > -1) {
        selected.splice(index, 1);
      } else {
        selected.push(this.value);
      }
      this.$emit("input", selected);
    }
  },
  computed: {
    isChecked() {
      return this.selected.indexOf(this.value) > -1;
    }
  }
};
