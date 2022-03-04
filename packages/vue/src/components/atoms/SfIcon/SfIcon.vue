<template>
  <span
    ref="icon"
    :class="['sf-icon', iconColorClass, iconSizeClass]"
    :style="iconCustomStyle"
    v-on="$listeners"
  >
    <slot v-if="!isLoaded" v-bind="{ viewBox, iconPaths, icon }">
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
import { iconColorsValues as SF_COLORS } from "@storefront-ui/shared/variables/colors";
import { sizesValues as SF_SIZES } from "@storefront-ui/shared/variables/sizes";
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
  data() {
    return {
      iconFile: null,
      isLoaded: false,
    };
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
      return typeof this.icon === "string" && this.iconFile ? true : null;
    },
    iconViewBox() {
      return this.isSFIcons
        ? this.iconFile.viewBox || this.viewBox
        : this.viewBox;
    },
    iconPaths() {
      if (this.isSFIcons) {
        return this.iconFile.paths;
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
  watch: {
    icon: {
      immediate: true,
      handler: function (value) {
        if (value) {
          // checks if icon file name passed, otherwise load icon path
          if (!new RegExp("[A-Z]+[0-9]+").test(value)) {
            this.isLoaded = true;
            import(
              /* webpackChunkName: "icon-[request]" */ `@storefront-ui/shared/icons/${value}`
            )
              .then((module) => module.default)
              .then((icon) => {
                this.iconFile = icon;
                this.isLoaded = false;
              });
          } else {
            this.iconFile = value;
          }
        }
      },
    },
  },
  methods: {
    fillPathUrl(uid) {
      return `url(#linearGradient-${uid})`;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfIcon.scss";
</style>
