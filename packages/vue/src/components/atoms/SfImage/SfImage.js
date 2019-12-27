// @vue/component
import lozad from "lozad";

export default {
  name: "SfImage",
  props: {
    src: {
      type: [String, Object],
      default: () => ({})
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: undefined
    },
    height: {
      type: [String, Number],
      default: undefined
    },
    lazy: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    src() {
      this.$el.removeAttribute("data-loaded");
      this.show = false;
      this.lozad();
    }
  },
  methods: {
    lozad() {
      if (!this.lazy) return;
      const vm = this;
      this.$nextTick(() => {
        const observer = lozad(vm.$refs.image, {
          load(el) {
            console.log(el);
            vm.show = true;
          }
        });
        observer.observe();
      });
    }
  },
  mounted() {
    if (!this.lazy) {
      this.show = true;
      return;
    }
    this.lozad();
  }
};
