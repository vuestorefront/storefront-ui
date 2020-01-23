<template>
  <div
    class="sf-bottom-navigation__item"
    :class="{ 'sf-bottom-navigation__active-button': isActive }"
  >
    <slot name="icon" v-bind="{ icon, iconSize, isActive }">
      <SfCircleIcon v-if="isActive">
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
          'sf-bottom-navigation__floating-label': isActive
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
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>
