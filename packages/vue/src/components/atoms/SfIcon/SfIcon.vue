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
        <defs :class="{ 'display-none': coverage > 1 }">
          <linearGradient
            :id="`linearGradient-${_uid}`"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
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
export default {
  name: "SfIcon",
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
      if (this.isSFSizes) {
        switch (this.size.trim()) {
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
        : this.fillPathUrl(this._uid);
    },
  },
  methods: {
    fillPathUrl(uid) {
      return `url(#linearGradient-${uid})`;
    },
  },
};
</script>
<style lang="scss" src="./SfIcon.scss"></style>
