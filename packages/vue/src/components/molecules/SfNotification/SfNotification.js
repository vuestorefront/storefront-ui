import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
    name: "SfNotification",
    components: {
        SfIcon,
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
         * Notification type ("alert", "warning", "info", "success"). Check "Knobs" section to see how they look like.
         */
        type: {
            type: String,
            default: "alert",
            validator: function(value) {
                return ["alert", "warning", "info", "success"].indexOf(value) !== -1;
            }
        }
    },
    computed: {
        hasMessage() {
            return this.message || this.$slots.hasOwnProperty("message");
        },
        chooseIcon() {
            switch (this.type) {
                case "success":
                    return "added_to_cart";
                case "warning":
                    return "info_shield";
                default:
                    return "info_circle";
            }
        }
    },
    methods: {
        close() {
            this.$emit("close");
        }
    }
};