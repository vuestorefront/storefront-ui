import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";

Vue.component("SfFooterColumn", SfFooterColumn);

export default {
  name: "SfFooter",
  props: {
    /**
     * Selected prop
     */
    selected: {
      type: [String, Array],
      default: () => []
    },
    /**
     * Multiple prop
     */
    multiple: {
      type: Boolean,
      default: false
    }
  },
  model: {
    event: "update:selected",
    prop: "selected"
  },
  methods: {
    getSelected: function() {
      return this.selected;
    },
    updateSelected: function(data) {
      this.$emit("update:selected", data);
    },
    isMultiple: function() {
      return this.multiple;
    },
    tabClicked(slotId) {
      if (!this.multiple) {
        this.$children.forEach(child => {
          child._uid === slotId
            ? (child.isActive = !child.isActive)
            : (child.isActive = false);
        });
      } else {
        const clickedHeader = this.$children.find(child => {
          return child._uid === slotId;
        });
        clickedHeader.isActive = !clickedHeader.isActive;
      }
    }
  },
  mounted: function() {
    this.$on("tabClicked", this.tabClicked);
  }
};
