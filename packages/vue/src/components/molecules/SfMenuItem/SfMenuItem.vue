<template>
  <component
    :is="componentIs"
    class="sf-menu-item"
    v-bind="bind"
    :data-testid="label"
    v-on="$listeners"
  >
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
        :class="{ 'display-none': !icon }"
        :icon="icon"
        class="sf-menu-item__mobile-nav-icon smartphone-only"
        size="14px"
      />
    </slot>
  </component>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfMenuItem",
  components: {
    SfIcon,
    SfLink,
    SfButton,
  },
  props: {
    /**
     * Menu-item label
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * Menu-item icon (visible on mobile)
     */
    icon: {
      type: [String, Array],
      default: "chevron_right",
    },
    /**
     * Menu-item count of items
     */
    count: {
      type: [String, Number],
      default: "",
    },
    /**
     * Menu-item link (if is empty then SfMenuItem is SfButton)
     */
    link: {
      type: [String, Object],
      default: "",
    },
  },
  computed: {
    bind() {
      const bind = {};
      if (this.link) {
        bind.link = this.link;
      } else {
        bind.class = "sf-button--pure";
      }
      return bind;
    },
    componentIs() {
      return this.link ? "SfLink" : "SfButton";
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfMenuItem.scss";
</style>
