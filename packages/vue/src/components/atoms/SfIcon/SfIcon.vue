<template>
  <span
    ref="icon"
    :class="['sf-icon', iconColorClass, iconSizeClass]"
    :style="iconCustomStyle"
    v-on="$listeners"
  >
    <slot v-bind="{ viewBox, iconPaths, icon }">
      <svg
        class="sf-icon-path"
        :viewBox="iconViewBox"
        preserveAspectRatio="none"
      >
        <defs v-if="coverage < 1">
          <linearGradient :id="coverage" x1="0" y1="0" x2="1" y2="0">
            <stop :offset="coverage" stop-color="var(--icon-color)" />
            <stop
              offset="0"
              stop-color="var(--icon-color-negative, var(--c-gray-variant))"
            />
          </linearGradient>
        </defs>
        <path
          v-for="(path, index) in iconPaths"
          :key="index"
          :d="path"
          :fill="fillPath"
          style="height: 100%"
        />
      </svg>
    </slot>
  </span>
</template>
<script>
import icons from "@storefront-ui/shared/icons/icons";
import { iconColorsValues as SF_COLORS } from "@storefront-ui/shared/variables/colors";
import { sizesValues as SF_SIZES } from "@storefront-ui/shared/variables/sizes";
const SF_ICONS = Object.keys(icons);

const fillPathUrl = (index) => `url(#${index})`;

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
      default: "",
    },
    /**
     * Custom size of the icon
     * It can be our standard sizes, or `12px` or `1.2rem` or nothing.
     * Standard sizes: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `xl3`, `xl4`.
     */
    size: {
      type: String,
      default: "",
    },
    /**
     * Custom color of the icon
     * It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing.
     * Standard colors: `white`, `black`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`, `accent`.
     */
    color: {
      type: String,
      default: "",
    },
    /**
     * Custom viewBox size of the icon
     * It should be according to the standard `"min-x min-y width height"`.
     * By default it will be `0 0 24 24`. If you use our icons, you don't need to pass this prop at all.
     * Recommendations: try to get your SVG designed with our default viewBox value and reduce the number of props passed to the component.
     */
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
    /**
     * The fraction in which the icon is partially collored with --icon-color value and the rest with --icon-color-negative.
     * To be used in SfRating.
     * */
    coverage: {
      type: [String, Number],
      default: 1,
    },
  },
  computed: {
    isSFColors() {
      return SF_COLORS.includes(this.color.trim());
    },
    isSFSizes() {
      const size = this.size.trim();
      return SF_SIZES.includes(size);
    },
    iconColorClass() {
      return this.isSFColors ? `color-${this.color.trim()}` : "";
    },
    iconSizeClass() {
      return this.isSFSizes ? `size-${this.size.trim()}` : "";
    },
    iconCustomStyle() {
      return {
        "--icon-color": !this.isSFColors ? this.color : "",
        "--icon-size": !this.isSFSizes ? this.size : "",
      };
    },
    isSFIcons() {
      if (typeof this.icon === "string") {
        return SF_ICONS.includes(this.icon.trim());
      } else return null;
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
    },
    fillPath() {
      return this.coverage === 1
        ? "var(--icon-color)"
        : fillPathUrl(this.coverage);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfIcon.scss";
</style>
