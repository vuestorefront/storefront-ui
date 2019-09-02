import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";

export default {
  name: "SfFooterColumn",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  components: {
    SfChevron
  },
  methods: {
    tabClick() {
      this.isActive = !this.isActive;
    }
  }
};
