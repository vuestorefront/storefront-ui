<template>
  <div class="sf-bar">
    <slot name="back">
      <div class="sf-bar__icon">
        <SfIcon
          v-if="back"
          icon="chevron_left"
          size="14px"
          role="button"
          aria-label="back"
          @click="$emit('click:back')"
        />
      </div>
    </slot>
    <slot name="title" v-bind="{ title }">
      <div class="sf-bar__title">{{ title }}</div>
    </slot>
    <slot name="close">
      <div class="sf-bar__icon">
        <SfIcon
          v-if="close"
          icon="cross"
          size="14px"
          role="button"
          aria-label="close"
          @click="$emit('click:close')"
        />
      </div>
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfBar",
  components: {
    SfIcon
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    back: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfBar.scss";
</style>
