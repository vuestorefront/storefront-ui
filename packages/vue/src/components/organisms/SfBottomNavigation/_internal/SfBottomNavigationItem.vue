<template>
  <div class="sf-bottom-navigation__item">
    <slot name="icon">
      <SfIcon v-if="!isActiveButton" :icon="iconName" :size="iconSize" />
      <SfCircleIcon v-else class="sf-bottom-navigation__floating-icon">
        <SfIcon :icon="iconName" :size="iconSize" color="white" />
      </SfCircleIcon>
    </slot>
    <slot name="label">
      <span>{{ iconLabel }}</span>
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
    iconName: {
      type: String,
      default: ""
    },
    iconLabel: {
      type: String,
      default: ""
    },
    iconSize: {
      type: String,
      default: ""
    },
    isActiveButton: {
      type: Boolean,
      default: false
    }
  }
};
</script>
