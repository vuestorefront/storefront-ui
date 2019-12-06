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
    open() {
      return this.$parent.open.includes(this.title);
    }
  },
  methods: {
    toggle(payload) {
      this.$parent.toggle(payload);
    }
  },
  mounted() {
    this.$parent.items.push(this.title);
  }
};
