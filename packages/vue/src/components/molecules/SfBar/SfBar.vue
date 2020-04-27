<template>
  <div class="sf-bar">
    <div>
      <slot name="back">
        <button
          v-if="back"
          v-focus
          aria-label="back"
          class="sf-bar__icon"
          @click="$emit('click:back')"
        >
          <SfIcon icon="chevron_left" size="14px" />
        </button>
      </slot>
    </div>
    <div>
      <slot name="title" v-bind="{ title }">
        <div class="sf-bar__title">{{ title }}</div>
      </slot>
    </div>
    <div>
      <slot name="close">
        <button
          v-if="close"
          v-focus
          class="sf-bar__icon"
          aria-label="close"
          @click="$emit('click:close')"
        >
          <SfIcon icon="cross" size="14px" />
        </button>
      </slot>
    </div>
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
