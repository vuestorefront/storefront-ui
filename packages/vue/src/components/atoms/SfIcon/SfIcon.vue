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
    icon: {
      type: [String, Array],
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
    coverage: {
      type: [String, Number],
      default: 1,
    },
  },
  iconColorClass(color) {
    const isSFColors = SF_COLORS.includes(color.trim());
    if (isSFColors) {
      switch (color.trim()) {
        case "green-primary":
          return "color-green-primary";
        case "green-secondary":
          return "color-green-secondary";
        case "black":
          return "color-black";
        case "dark-secondary":
          return "color-dark-secondary";
        case "gray-primary":
          return "color-gray-primary";
        case "dark-secondary":
          return "color-dark-secondary";
        case "gray-secondary":
          return "color-gray-secondary";
        case "light-primary":
          return "color-light-primary";
        case "white":
          return "color-white";
        case "red-primary":
          return "color-red-primary";
        case "red-secondary":
          return "color-red-secondary";
        case "yellow-primary":
          return "color-yellow-primary";
        case "yellow-secondary":
          return "color-yellow-secondary";
        case "blue-primary":
          return "color-blue-primary";
        case "blue-secondary":
          return "color-blue-secondary";
        default:
          return "color-green-primary";
      }
    } else {
      return "";
    }
  },
  iconSizeClass(size) {
    const isSFSizes = SF_SIZES.includes(size.trim());
    if (isSFSizes) {
      switch (size.trim()) {
        case "xxs":
          return "size-xxs";
        case "xs":
          return "size-xs";
        case "sm":
          return "size-sm";
        case "md":
          return "size-md";
        case "lg":
          return "size-lg";
        case "xl":
          return "size-xl";
        case "xxl":
          return "size-xxl";
        case "xl3":
          return "size-xl3";
        case "xl4":
          return "size-xl4";
        default:
          return "size-lg";
      }
    } else {
      return "";
    }
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
