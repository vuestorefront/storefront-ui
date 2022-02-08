<template>
  <div class="sf-bar">
    <div>
      <slot name="back">
        <SfButton
          :class="{ 'display-none': !back }"
          aria-label="back"
          class="sf-button--pure sf-bar__icon"
          type="button"
          @click="$emit('click:back')"
        >
          <SfIcon icon="chevron_left" size="0.875rem" />
        </SfButton>
      </slot>
    </div>
    <div>
      <slot name="title" v-bind="{ title }">
        <div class="sf-bar__title">{{ title }}</div>
      </slot>
    </div>
    <div>
      <slot name="close">
        <SfButton
          :class="{ 'display-none': !close }"
          class="sf-button--pure sf-bar__icon"
          aria-label="close"
          type="button"
          @click="$emit('click:close')"
        >
          <SfIcon icon="cross" size="14px" />
        </SfButton>
      </slot>
    </div>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfBar",
  components: {
    SfIcon,
    SfButton,
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
