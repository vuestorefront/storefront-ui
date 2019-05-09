export default {
  name: "SfFilterItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    count: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      defult: ""
    }
  },
  data() {
    return {
      isSelected: false
    };
  },
  inject: ["getSelected", "updateSelected"],
  computed: {
    selected: {
      get: function() {
        return this.getSelected();
      },
      set: function(val) {
        this.updateSelected(val);
      }
    }
  },
  methods: {
    clicked(e) {
      this.$emit("click", e);
      if (this.selected.includes(this.value)) {
        let index = this.selected.indexOf(this.value);
        if (index > -1) {
          this.selected.splice(index, 1);
        }
      } else {
        this.selected.push(this.value);
      }
    }
  }
};
