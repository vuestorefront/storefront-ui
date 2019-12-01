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
      const title = this.title;
      return this.$parent.opened.includes(title);
    }
  },
  methods: {
    toggle(payload) {
      this.$parent.toggle(payload);
    }
  },
  mounted() {
    const title = this.title;
    this.$parent.items.push(title);
  }
};
