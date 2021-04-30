<template functional>
  <span
    ref="icon"
    :class="[
      data.class,
      data.staticClass,
      'sf-icon',
      $options.iconColorClass(props.color),
      $options.iconSizeClass(props.size),
    ]"
    :style="[
      data.style,
      data.staticStyle,
      $options.iconCustomStyle(props.color, props.size),
    ]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot v-bind="{ props }">
      <svg
        class="sf-icon-path"
        :viewBox="$options.iconViewBox(props.icon, props.viewBox)"
        preserveAspectRatio="none"
      >
        <defs v-if="props.coverage < 1">
          <linearGradient :id="props.coverage" x1="0" y1="0" x2="1" y2="0">
            <stop :offset="props.coverage" stop-color="var(--icon-color)" />
            <stop
              offset="0"
              stop-color="var(--icon-color-negative, var(--c-gray-variant))"
            />
          </linearGradient>
        </defs>
        <path
          v-for="(path, index) in $options.iconPaths(props.icon)"
          :key="index"
          :d="path"
          :fill="$options.fillPath(props.coverage)"
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

export default {
  name: "SfIcon",
  inject: {
    components: {
      default: {
        icons,
        SF_COLORS,
        SF_SIZES,
        SF_ICONS,
      },
    },
  },
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
  iconColorClass(color) {
    const isSFColors = SF_COLORS.includes(color.trim());
    return isSFColors ? `color-${color.trim()}` : "";
  },
  iconSizeClass(size) {
    const isSFSizes = SF_SIZES.includes(size.trim());
    return isSFSizes ? `size-${size.trim()}` : "";
  },
  iconCustomStyle(color, size) {
    const isSFColors = SF_COLORS.includes(color.trim());
    const isSFSizes = SF_SIZES.includes(size.trim());
    return {
      "--icon-color": !isSFColors ? color : "",
      "--icon-size": !isSFSizes ? size : "",
    };
  },
  iconViewBox(icon, viewBox) {
    const isSFIcons = () => {
      if (typeof icon === "string") {
        return SF_ICONS.includes(icon.trim());
      } else return null;
    };
    console.log(isSFIcons(), icon, viewBox);
    return isSFIcons() ? icons[icon].viewBox || viewBox : viewBox;
  },
  iconPaths(icon) {
    const isSFIcons = () => {
      if (typeof icon === "string") {
        return SF_ICONS.includes(icon.trim());
      } else return null;
    };
    if (isSFIcons()) {
      return icons[icon].paths;
    } else {
      return Array.isArray(icon) ? icon : [icon];
    }
  },
  fillPath(coverage) {
    const fillPathUrl = (index) => `url(#${index})`;
    return coverage === 1 ? "var(--icon-color)" : fillPathUrl(coverage);
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfIcon.scss";
</style>
