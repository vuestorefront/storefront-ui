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
    selected: {
      type: [Array, Boolean],
      default: () => []
    }
  },
  components: {
    SfIcon
  },
  methods: {
    inputHandler() {
      if (typeof this.selected === "boolean") {
        this.$emit("input", !this.selected);
      } else {
        let selected = [...this.selected];
        if (selected.includes(this.value)) {
          selected = selected.filter(value => value !== this.value);
        } else {
          selected.push(this.value);
        }
        this.$emit("input", selected);
      }
    }
  },
  computed: {
    isChecked() {
      if (typeof this.selected === "boolean") {
        return this.selected;
      } else {
        return this.selected.includes(this.value);
      }
    }
  }
};
