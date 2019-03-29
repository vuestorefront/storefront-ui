export default {
  name: "SfAlert",
  props: {
    message: String,
    icon: String,
    displayIcon: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    type: ""
  }),
  mounted() {
    if (this.$el.className.includes("sf-alert--warning")) {
      this.type = "warning";
    }
    if (this.$el.className.includes("sf-alert--info")) {
      this.type = "info";
    }
    if (this.$el.className.includes("sf-alert--alert")) {
      this.type = "alert";
    }
  }
};
