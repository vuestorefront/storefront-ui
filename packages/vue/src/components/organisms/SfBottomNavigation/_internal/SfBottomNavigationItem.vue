<template>
  <div
    class="sf-bottom-navigation-item"
    :class="{
      'is-active': isActive,
      'is-floating': isFloating,
      center: !icon || !label,
    }"
    v-on="$listeners"
  >
    <slot name="icon" v-bind="{ icon, iconActive, isFloating }">
      <SfCircleIcon v-if="isFloating" :icon="circleIcon" :aria-label="label" />
      <SfButton
        v-else-if="icon.icon"
        class="sf-button--pure sf-bottom-navigation-item__icon"
        :aria-label="label"
      >
        <SfIcon :icon="currentIcon" :size="icon.size" />
      </SfButton>
    </slot>
    <slot name="label" v-bind="{ label }">
      <div
        v-if="label"
        class="sf-bottom-navigation-item__label"
        :class="{
          'has-margin': icon,
        }"
      >
        {{ label }}
      </div>
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../../atoms/SfIcon/SfIcon.vue";
import SfCircleIcon from "../../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfButton from "../../../atoms/SfButton/SfButton.vue";
import { focus } from "../../../../utilities/directives";
export default {
  name: "SfBottomNavigationItem",
  directives: { focus },
  components: {
    SfCircleIcon,
    SfIcon,
    SfButton,
  },
  props: {
    icon: {
      type: Object,
      default: () => {
        return {
          icon: "",
          size: "20px",
        };
      },
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    iconActive: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    isFloating: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      circleIcon: {
        icon: this.icon.icon,
        color: "white",
        size: "28px",
      },
    };
  },
  computed: {
    currentIcon() {
      return this.isActive && this.iconActive
        ? this.iconActive
        : this.icon.icon;
    },
  },
};
</script>
