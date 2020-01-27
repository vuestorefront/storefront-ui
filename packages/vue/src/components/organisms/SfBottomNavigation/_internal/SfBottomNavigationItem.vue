<template>
  <div
    class="sf-bottom-navigation__item"
    :class="{ 'sf-bottom-navigation__floating-button': isFloating }"
  >
    <slot name="icon" v-bind="{ icon, iconSize, isFloating }">
      <SfCircleIcon v-if="isFloating">
        <SfIcon v-if="icon" :icon="icon" :size="iconSize" color="white" />
      </SfCircleIcon>
      <SfIcon
        v-else-if="icon"
        :icon="icon"
        :size="iconSize"
        class="sf-bottom-navigation__icon"
      />
    </slot>
    <slot name="label" v-bind="{ label }">
      <span
        v-if="label"
        :class="{
          'sf-bottom-navigation__item--spacer': icon,
          'sf-bottom-navigation__floating-label': isFloating
        }"
        >{{ label }}</span
      >
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
    label: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: ""
    },
    isFloating: {
      type: Boolean,
      default: false
    }
  }
};
</script>
