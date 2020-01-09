<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="sf-notification"
      :class="`sf-notification--${type}`"
    >
      <!--@slot Custom notification icon. Slot content will replace default icon.-->
      <slot name="icon" v-bind="{ icon }">
        <SfIcon
          v-if="!!icon"
          class="sf-notification__icon"
          :icon="icon"
          size="lg"
          color="white"
        />
      </slot>
      <div>
        <!--@slot Custom title. Slot content will replace default title.-->
        <slot name="title" v-bind="{ title }">
          <div v-if="title" class="sf-notification__title">{{ title }}</div>
        </slot>
        <!--@slot Custom message. Slot content will replace default message.-->
        <slot name="message" v-bind="{ message }">
          <span v-if="message" class="sf-notification__message">{{
            message
          }}</span>
        </slot>
        <!--@slot Custom action. Slot content will replace default action.-->
        <slot name="action" v-bind="{ action, actionHandler }">
          <button
            v-if="action"
            class="sf-notification__action"
            @click="actionHandler"
          >
            {{ action }}
          </button>
        </slot>
      </div>
      <!--@slot Custom notification close icon. Slot content will replace default close icon.-->
      <slot name="close" v-bind="{ closeHandler }">
        <SfIcon
          class="sf-notification__close"
          icon="cross"
          color="white"
          size="14px"
          @click="closeHandler"
        />
      </slot>
    </div>
  </transition>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfNotification",
  components: {
    SfIcon
  },
  props: {
    /**
     * Visibility of the Notification. Default value is false.
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * Title that will be displayed in Notification.
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Message that will be displayed in Notification.
     */
    message: {
      type: String,
      default: ""
    },
    /**
     * Action that will be displayed in Notification.
     */
    action: {
      type: String,
      default: ""
    },
    /**
     * Notification type ("secondary", "info", "success", "warning", "danger"). Check "Knobs" section to see how they look like.
     */
    type: {
      type: String,
      default: "secondary",
      validator: function(value) {
        return ["secondary", "info", "success", "warning", "danger"].includes(
          value
        );
      }
    }
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
    }
  },
  methods: {
    actionHandler() {
      /**
       * Event for action button
       * @type {Event}
       */
      this.$emit("click:action");
    },
    closeHandler() {
      /**
       * Event for close icon
       * @type {Event}
       */
      this.$emit("click:close");
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfNotification.scss";
</style>
