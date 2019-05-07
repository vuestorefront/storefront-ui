export const TAB_COMPONENT_NAME = "SfTab";

export default {
  name: TAB_COMPONENT_NAME,
  inject: ["sharedState"],
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    isActive() {
      return this.id === this.sharedState.activeTab;
    }
  }
};
