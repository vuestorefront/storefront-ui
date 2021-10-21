<template>
  <div :class="colorClass" class="sf-alert">
    <!--@slot Custom alert icon. Slot content will replace default icon <SfIcon/> tag.-->
    <slot name="icon" v-bind="{ icon }">
      <SfIcon aria-hidden="true" :icon="icon" class="sf-alert__icon" />
    </slot>
    <!--@slot Custom message . Slot content will replace default message <span> tag.-->
    <slot name="message" v-bind="{ message }">
      <span v-if="message" class="sf-alert__message">{{ message }}</span>
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfAlert",
  components: {
    SfIcon,
  },
  props: {
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "secondary",
      validator: function (value) {
        return ["secondary", "info", "success", "warning", "danger"].includes(
          value
        );
      },
    },
  },
  computed: {
    icon() {
      switch (this.type) {
        case "success":
          return "added_to_cart";
        case "danger":
          return "info_shield";
        default:
          return "info_circle";
      }
    },
    colorClass() {
      switch (this.type) {
        case "secondary":
          return "color-secondary";
        case "info":
          return "color-info";
        case "success":
          return "color-success";
        case "warning":
          return "color-warning";
        case "danger":
          return "color-danger";
        default:
          return "color-info";
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfAlert.scss";
</style>
