// @vue/component
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";

export default {
  name: "SfFooterColumn",
  components: { SfChevron },
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    opened() {
      return this.$parent.opened.includes(this.title);
    }
  },
  methods: {
    toggle(payload) {
      this.$parent.toggle(payload);
    }
  },
  mounted() {
    this.$parent.updateItems(this.title);
  }
};
