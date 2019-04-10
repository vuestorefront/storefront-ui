import SfCircleButton from "@/components/atoms/SfCircleButton/SfCircleButton.vue";

export default {
  name: "SfBottomNavigation",
  props: {
    image: String,
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentIcon: {
      get() {
        return this.isActive;
      },
      set(value) {
        this.$emit("change:isActive", value);
      }
    }
  },
  methods: {
    setCurrentIcon: value => {
      this.currentIcon = value;
    }
  },
  components: {
    SfCircleButton
  }
};
