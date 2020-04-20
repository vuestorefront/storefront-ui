<template>
  <div class="sf-bar">
    <slot name="back">
        <button v-focus class="sf-bar__icon">
          <SfIcon
            v-if="back"
            icon="chevron_left"
            size="14px"
            aria-label="back"
            @click="$emit('click:back')"
          />
        </button>
    </slot>
    <slot name="title" v-bind="{ title }">
      <div class="sf-bar__title">{{ title }}</div>
    </slot>
    <slot name="close">
        <button v-focus class="sf-bar__icon">
          <SfIcon
            v-if="close"
            icon="cross"
            size="14px"
            aria-label="close"
            @click="$emit('click:close')"
          />
        </button>
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import { focus } from "../../../utilities/directives/focus-directive.js";
export default {
  name: "SfBar",
  directives: { focus },
  components: {
    SfIcon,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    back: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfBar.scss";
</style>
