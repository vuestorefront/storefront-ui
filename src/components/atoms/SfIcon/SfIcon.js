const HEX_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const RGB_REGEX = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
const SF_SIZES = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xl3", "xl4"];

export default {
  name: "SfIcon",
  props: {
    /**
     * Icon SVG Path
     */
    path: {
      type: String,
      default: ""
    },
    /**
     * Icon SVG Size
     */
    size: {
      type: String,
      default: ""
    },
    /**
     * Icon SVG Fill Color
     */
    color: {
      type: String,
      default: ""
    }
  },
  computed: {
    isDecimalOrHexColor() {
      const color = this.color.trim();
      return RGB_REGEX.test(color) || HEX_REGEX.test(color);
    },
    isPresetSizes() {
      const size = this.size.trim();
      return SF_SIZES.includes(size);
    },
    iconColor() {
      return !this.isDecimalOrHexColor
        ? `sf-icon--color-${this.color.trim()}`
        : this.color;
    },
    iconSize() {
      return this.isPresetSizes ? `sf-icon--size-${this.size.trim()}` : "";
    }
  },
  mounted() {
    if (this.isDecimalOrHexColor) {
      this.$refs.icon.style.setProperty("--icon-color", this.color);
    }

    if (!this.isPresetSizes) {
      this.$refs.icon.style.setProperty("--icon-size", this.size);
    }
  }
};
