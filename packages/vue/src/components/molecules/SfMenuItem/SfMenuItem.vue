<template>
  <div class="sf-menu-item" v-on="$listeners">
    <SfLink class="sf-menu-item__link" :link="link">
      <!-- @slot for menu item icon-->
      <slot name="icon" />
      <!-- @slot for menu item label-->
      <slot name="label" v-bind="{ label }">
        <span class="sf-menu-item__label">{{ label }}</span>
      </slot>
      <!-- @slot for items count -->
      <slot name="count" v-bind="{ count }">
        <span class="sf-menu-item__count">{{ count }}</span>
      </slot>
      <!-- @slot -->
      <slot name="mobile-nav-icon" v-bind="{ icon }">
        <SfIcon
          v-if="icon"
          :icon="icon"
          class="sf-menu-item__mobile-nav-icon"
          size="14px"
        />
      </slot>
    </SfLink>
  </div>
</template>
<script>
// import focus from "../../../utilities/directives";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";
export default {
  name: "SfMenuItem",
  components: {
    SfIcon,
    SfLink,
  },
  // directives: { focus },
  props: {
    label: {
      type: String,
      default: "",
    },
    icon: {
      type: [String, Array],
      default: "chevron_right",
    },
    count: {
      type: [String, Number],
      default: "",
    },
    link: {
      type: [String, Object],
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfMenuItem.scss";
</style>
