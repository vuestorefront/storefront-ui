import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfBanner",
  props: {
    /**
     * Banner title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Banner subtitle (at the top)
     */
    subtitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: ""
    },
    /** Background color in HEX (eg #FFFFFF) */
    background: {
      type: String,
      default: ""
    },
    /** Background image. Influenced by $banner-background-size, $banner-background-position CSS props. */
    image: {
      type: [String, Object],
      default: ""
    }
  },
  components: {
    SfButton
  },
  watch: {
    image: {
      handler(image) {
        if (typeof window === "undefined") return;
        this.$nextTick(() => {
          if (typeof image === "object") {
            this.$el.style.setProperty(
              "--background-image",
              `url(${image.small})`
            );
            this.$el.style.setProperty(
              "--background-image-desktop",
              `url(${image.normal})`
            );
          } else {
            this.$el.style.setProperty("--background-image", `url(${image})`);
            this.$el.style.setProperty(
              "--background-image-desktop",
              `url(${image})`
            );
          }
        });
      },
      immediate: true
    },
    background: {
      handler(background) {
        if (typeof window === "undefined") return;
        this.$nextTick(() => {
          this.$el.style.setProperty("--background-color", background);
        });
      },
      immediate: true
    }
  }
};
