export default {
  name: "SfStep",
  inject: ["stepsData"],
  props: {
    /**
     * Name of the step
     */
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    internalName() {
      if (this.stepsData) {
        return this.stepsData.name;
      }
      return null;
    },
    index() {
      if (this.stepsData) {
        return this.stepsData.index;
      }
      return null;
    },
    active() {
      return this.internalName === this.name;
    }
  }
};
