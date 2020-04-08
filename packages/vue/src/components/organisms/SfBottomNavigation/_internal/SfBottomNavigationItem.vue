<template>
  <div
    class="sf-bottom-navigation-item"
    :class="{
      'sf-bottom-navigation-item--active': isActive,
      'sf-bottom-navigation-item--floating': isFloating,
      'sf-bottom-navigation-item--center': !icon || !label
    }"
    v-on="$listeners"
  >
    <slot name="icon" v-bind="{ icon, iconActive, iconSize, isFloating }">
      <SfCircleIcon
        v-if="isFloating"
        :icon="icon"
        icon-color="white"
        icon-size="28px"
      />
      <SfIcon
        v-else-if="icon"
        :icon="currentIcon"
        :size="iconSize"
        class="sf-bottom-navigation-item__icon"
      />
    </slot>
    <slot name="label" v-bind="{ label }">
      <div
        v-if="label"
        class="sf-bottom-navigation-item__label"
        :class="{
          'sf-bottom-navigation-item--has-margin': icon
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
export default {
  name: "SfBottomNavigationItem",
  components: {
    SfCircleIcon,
    SfIcon
  },
  props: {
    icon: {
      type: String,
      default: ""
    },
    isActive: {
      type: Boolean,
      default: false
    },
    iconActive: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: "20px"
    },
    isFloating: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentIcon() {
      return this.isActive && this.iconActive ? this.iconActive : this.icon;
    }
  }
};
</script>
