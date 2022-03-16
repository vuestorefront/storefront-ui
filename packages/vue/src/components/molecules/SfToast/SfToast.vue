<template>
  <SfToastContainer :class="containerPositionClass">
    <transition name="sf-fade" appear>
      <div :class="[colorClass, positionClass]" class="sf-toast">
        <slot v-bind="{ message }">
          <span
            role="alert"
            :class="{ 'display-none': !message }"
            class="sf-toast__message"
            >{{ message }}</span
          >
        </slot>
      </div>
    </transition>
  </SfToastContainer>
</template>

<script>
import SfToastContainer from "./_internal/SfToastContainer.vue";
export default {
  name: "SfToast",
  components: {
    SfToastContainer,
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
    position: {
      type: String,
      default: "top",
      validator(value) {
        return (
          [
            "top",
            "top-left",
            "top-right",
            "bottom",
            "bottom-right",
            "bottom-left",
          ].indexOf(value) > -1
        );
      },
    },
  },
  computed: {
    positionClass() {
      switch (this.position) {
        case "top":
          return "sf-toast--top";
        case "top-left":
          return "sf-toast--top-left";
        case "top-right":
          return "sf-toast--top-right";
        case "bottom":
          return "sf-toast--bottom";
        case "bottom-right":
          return "sf-toast--bottom-right";
        case "bottom-left":
          return "sf-toast--bottom-left";
        default:
          return "";
      }
    },
    containerPositionClass() {
      switch (this.position) {
        case "top":
        case "top-left":
        case "top-right":
          return "sf-toast-container--top";
        case "bottom":
        case "bottom-left":
        case "bottom-right":
          return "sf-toast-container--bottom";
        default:
          return "";
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
@import "~@storefront-ui/shared/styles/components/molecules/SfToast.scss";
</style>
