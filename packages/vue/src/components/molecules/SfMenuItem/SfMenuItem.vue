<template>
  <div class="sf-menu-item" v-on="$listeners">
    <!-- @slot Custom content for icon -->
    <slot name="icon" />
    <!-- @slot Custom content for label -->
    <slot name="label" v-bind="{ label }">
      <span class="sf-menu-item__label">{{ label }}</span>
    </slot>
    <!-- @slot Custom content for count -->
    <slot name="count" v-bind="{ count }">
      <span class="sf-menu-item__count">{{ count }}</span>
    </slot>
    <!-- @slot Custom content for navigation icon on mobile -->
    <slot name="mobile-nav-icon" v-bind="{ icon }">
      <SfIcon
        v-if="icon"
        :icon="icon"
        class="sf-menu-item__mobile-nav-icon"
        size="14px"
      />
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfMenuItem",
  components: {
    SfIcon
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "chevron_right"
    },
    count: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfMenuItem.scss";
</style>
