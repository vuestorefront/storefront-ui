import SfCircleIcon from "@/components/atoms/SfCircleIcon/SfCircleIcon.vue";

export default {
  name: "SfBottomNavigation",
  props: {
    items: { default: true },
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
    SfCircleIcon
  }
};
