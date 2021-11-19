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
      default: "green-primary",
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
    return isSFColors ? `color-${color.trim()}` : "";
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
