import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfCard",
  components: {
    SfIcon
  },
  data() {
    return {
      isActive: false,
      style: {}
    };
  },
  methods: {
    toggleActive(event) {
      if (!this.style.height) {
        this.style = { height: this.$refs.top.offsetHeight + "px" };
      }
      this.$nextTick(() => {
        const { target } = event;
        const mobileCross = this.$refs.cross.$el;
        const offsetTop = window.pageYOffset;
        if (
          mobileCross.contains(target) ||
          (!mobileCross.contains(target) && !this.isActive && offsetTop <= 10)
        ) {
          this.isActive = !this.isActive;
        }
      });
    }
  }
};
