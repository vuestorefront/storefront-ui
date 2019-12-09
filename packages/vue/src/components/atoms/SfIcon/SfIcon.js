import { icons } from "@storefront-ui/shared/icons/icons";

const HEX_REGEX = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const RGB_REGEX = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
const SF_SIZES = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xl3", "xl4"];
const SF_ICONS = Object.keys(icons);

export default {
  name: "SfIcon",
  props: {
    /**
     * Icon SVG path(s)
     * It can be single SVG path (string) or array of SVG paths or icon name
     * from our icons list (such as 'added_to_cart`)
     */
    icon: {
      type: [String, Array],
      default: ""
    },
    /**
     * Custom size of the icon
     * It can be our standard sizes, or `12px` or `1.2rem` or nothing.
     * Standard sizes: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xl3`, `xl4`.
     */
    size: {
      type: String,
      default: ""
    },
    /**
     * Custom color of the icon
     * It can be according to our standard colors, or `#fff` or `rgb(255,255,255)` or nothing.
     * Standard colors: `primary`, `secondary`, `white`, `black`, `accent`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`.
     */
    color: {
      type: String,
      default: ""
    },
    /**
     * Custom viewBox size of the icon
     * It should be according to the standard `"min-x min-y width height"`.
     * By default it will be `0 0 24 24`. If you use our icons, you don't need to pass this prop at all.
     * Recommedations: try to get your SVG designed with our default viewBox value and reduce the number of props passed to the component.
     */
    viewBox: {
      type: String,
      default: "0 0 24 24"
    }
  },
  computed: {
    isDecimalOrHexColor() {
      const color = this.color.trim();
      return RGB_REGEX.test(color) || HEX_REGEX.test(color);
    },
    isSFSizes() {
      const size = this.size.trim();
      return SF_SIZES.includes(size);
    },
    iconColor() {
      return !this.isDecimalOrHexColor
        ? `sf-icon--color-${this.color.trim()}`
        : "";
    },
    iconSize() {
      return this.isSFSizes ? `sf-icon--size-${this.size.trim()}` : "";
    },
    isSFIcons() {
      return SF_ICONS.includes(this.icon.trim());
    },
    iconViewBox() {
      return this.isSFIcons
        ? icons[this.icon].viewBox || this.viewBox
        : this.viewBox;
    },
    iconPaths() {
      if (this.isSFIcons) {
        return icons[this.icon].paths;
      } else {
        return Array.isArray(this.icon) ? this.icon : [this.icon];
      }
    }
  },
  updated() {
    this.$nextTick(this.updateCustomizeColorAndSize);
  },
  mounted() {
    this.updateCustomizeColorAndSize();
  },
  methods: {
    updateCustomizeColorAndSize() {
      const customColorProperty = this.isDecimalOrHexColor ? this.color : "";
      const customSizeProperty = !this.isSFSizes ? this.size : "";

      this.$refs.icon.style.setProperty("--icon-color", customColorProperty);
      this.$refs.icon.style.setProperty("--icon-size", customSizeProperty);
    }
  }
};
