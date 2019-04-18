import SfCircleButton from "@/components/atoms/SfCircleButton/SfCircleButton.vue";

export default {
  name: "SfBottomNavigation",
  props: {
    item: { default: true },
    current: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentIcon: {
      get() {
        return this.current;
      },
      set(value) {
        this.$emit("change:current", value);
      }
    }
  },
  methods: {
    setCurrent: value => {
      this.current = value;
    }
  },
  components: {
    SfCircleButton
  }
};
