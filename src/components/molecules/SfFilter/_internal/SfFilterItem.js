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
  inject: ["getSelected", "updateSelected", "isMultiple"],
  computed: {
    selected: {
      get: function() {
        return this.getSelected();
      },
      set: function(val) {
        this.updateSelected(val);
      }
    },
    multiple: function () {
      return this.isMultiple()
    }
  },
  methods: {
    clicked() {
      if (this.multiple) {
        if (!Array.isArray(this.selected)) {
          this.selected = []
        }
        if (this.selected.includes(this.value)) {
          let index = this.selected.indexOf(this.value);
          if (index > -1) {
            this.selected.splice(index, 1);
          }
        } else {
          this.selected.push(this.value);
        }
      } else {
        this.selected = this.value === this.selected ? null : this.value
      }
    }
  }
};
