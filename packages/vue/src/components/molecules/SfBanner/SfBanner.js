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
  mounted() {
    if (typeof this.image === "object") {
      if (this.image.mobile && this.image.desktop) {
        this.$el.style.setProperty(
          "--background-image-mobile",
          `url(${this.image.mobile})`
        );
        this.$el.style.setProperty(
          "--background-image-desktop",
          `url(${this.image.desktop})`
        );
      }
    } else {
      this.$el.style.setProperty(
        "--background-image-mobile",
        `url(${this.image})`
      );
      this.$el.style.setProperty(
        "--background-image-desktop",
        `url(${this.image})`
      );
    }
    this.$el.style.setProperty("--background-color", this.background);
  }
};
