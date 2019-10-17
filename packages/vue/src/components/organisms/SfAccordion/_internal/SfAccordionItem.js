import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
export default {
  name: "SfAccordionItem",
  components: {
    SfChevron
  },
  props: {
    header: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    accordionClick() {
      this.$parent.$emit("toggle", this._uid);
    }
  }
};
