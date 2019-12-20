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
