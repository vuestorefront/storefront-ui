import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";

export default {
    name: "SfNotification",
    components: {
        SfIcon,
        SfHeading
    },
    props: {
        // visibility of notification
        visible: {
            type: Boolean,
            default: false
        },
        // title of the message that will be showed as header 
        title: {
            type: String,
            default: ""
        },
        // the body of the message
        message: {
            type: String,
            default: ""
        },
        // icon added to the message in desktop mode
        icon: {
            type: String,
            default: chooseIcon
        },
        sizeIcon: {
            type: String,
            default: "lg"
        },
        colorIcon: {
            type: String,
            default: "white"
        },
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
                case "alert":
                case "info":
                    "info_circle";
                    break
                case "warning":
                    "info_shield";
                    break
                default:
                    "added_to_cart";
            }
        }
    },
    methods: {
        close() {
            this.$emit("close");
        }
    }
};