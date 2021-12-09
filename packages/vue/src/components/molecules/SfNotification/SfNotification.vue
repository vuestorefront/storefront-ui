<template>
  <transition name="sf-fade">
    <div
      :class="[{ 'display-none': !visible }, colorClass]"
      class="sf-notification"
    >
      <slot name="icon" v-bind="{ icon }">
        <SfIcon
          :class="{ 'display-none': !icon }"
          class="sf-notification__icon"
          :icon="icon"
          size="lg"
          color="white"
        />
      </slot>
      <div>
        <slot name="title" v-bind="{ title }">
          <div
            :class="{ 'display-none': !title }"
            class="sf-notification__title smartphone-only"
          >
            {{ title }}
          </div>
        </slot>
        <slot name="message" v-bind="{ message }">
          <span
            :class="{ 'display-none': !message }"
            class="sf-notification__message"
            >{{ message }}</span
          >
        </slot>
        <slot name="action" v-bind="{ action, actionHandler }">
          <SfButton
            :class="{ 'display-none': !action }"
            class="sf-button--pure sf-notification__action"
            @click="actionHandler"
          >
            {{ action }}
          </SfButton>
        </slot>
      </div>
      <slot name="close" v-bind="{ closeHandler }">
        <SfButton
          :class="{ 'display-none': persistent }"
          aria-label="Close notification"
          class="sf-button--pure sf-notification__close"
          @click="closeHandler"
        >
          <SfIcon icon="cross" color="white" />
        </SfButton>
      </slot>
    </div>
  </transition>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfNotification",
  components: {
    SfIcon,
    SfButton,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    persistent: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    action: {
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
  methods: {
    actionHandler() {
      this.$emit("click:action");
    },
    closeHandler() {
      this.$emit("click:close");
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfNotification.scss";
</style>
