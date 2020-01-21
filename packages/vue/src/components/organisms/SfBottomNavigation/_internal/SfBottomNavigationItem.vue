<template>
  <div class="sf-bottom-navigation__item">
    <template v-if="iconName">
      <slot name="icon" v-bind="{ iconName, iconSize, isActiveButton }">
        <SfIcon v-if="!isActiveButton" :icon="iconName" :size="iconSize" />
        <SfCircleIcon v-else>
          <SfIcon :icon="iconName" :size="iconSize" color="white" />
        </SfCircleIcon>
      </slot>
    </template>
    <template v-if="iconLabel">
      <slot name="label" v-bind="{ iconLabel }">
        <span>{{ iconLabel }}</span>
      </slot>
    </template>
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
