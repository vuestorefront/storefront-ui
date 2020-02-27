<template>
  <div
    class="sf-bottom-navigation-item"
    :class="{ 'sf-bottom-navigation-item--floating': isFloating }"
  >
    <!-- @slot Slot for icons -->
    <slot name="icon" v-bind="{ icon, iconSize, isFloating }">
      <SfCircleIcon
        v-if="isFloating"
        :icon="icon"
        icon-color="white"
        icon-size="28px"
      >
      </SfCircleIcon>
      <SfIcon
        v-else-if="icon"
        :icon="icon"
        :size="iconSize"
        class="sf-bottom-navigation-item__icon"
      />
    </slot>
    <!-- @slot Slot for labels -->
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
  }
};
</script>
