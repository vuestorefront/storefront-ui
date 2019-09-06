export default {
  name: "SfStep",
  inject: ["stepsData"],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    internalName() {
      return this.stepsData.name;
    },
    index() {
      return this.stepsData.index;
    },
    active() {
      return this.internalName === this.name;
    }
  }
};
