<template>
  <div class="sf-bottom-navigation__item">
    <slot name="icon" v-bind="{ iconName, iconSize, isActiveButton }">
      <SfCircleIcon
        v-if="isActiveButton"
        class="sf-bottom-navigation__floating-icon"
      >
        <SfIcon
          v-if="iconName"
          :icon="iconName"
          :size="iconSize"
          color="white"
        />
      </SfCircleIcon>
      <SfIcon
        v-if="iconName && !isActiveButton"
        :icon="iconName"
        :size="iconSize"
      />
    </slot>
    <slot name="label" v-bind="{ iconLabel }">
      <span v-if="iconLabel">{{ iconLabel }}</span>
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
