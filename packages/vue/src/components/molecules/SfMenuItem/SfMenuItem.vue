<template>
  <component
    :is="componentIs"
    class="sf-menu-item"
    v-bind="bind"
    :data-testid="dataTestDisplay('label')"
    v-on="$listeners"
  >
    <slot name="icon" />
    <slot name="label" v-bind="{ label }">
      <span class="sf-menu-item__label">{{ label }}</span>
    </slot>
    <slot name="count" v-bind="{ count }">
      <span class="sf-menu-item__count">{{ count }}</span>
    </slot>
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
import { dataTestDisplay } from "../../../utilities/helpers";

export default {
  name: "SfMenuItem",
  components: {
    SfIcon,
    SfLink,
    SfButton,
  },
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
      default: null,
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
  methods: {
    dataTestDisplay,
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfMenuItem.scss";
</style>
