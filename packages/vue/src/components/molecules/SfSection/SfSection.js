import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
export default {
  name: "SfSection",
  props: {
    heading: {
      type: Object,
      default: () => ({
        title: "",
        subtitle: "",
        level: 1
      })
    }
  },
  components: {
    SfHeading
  }
};
