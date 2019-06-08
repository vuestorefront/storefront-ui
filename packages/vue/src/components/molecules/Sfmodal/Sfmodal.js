import SfButton from "@/components/atoms/SfButton/SfButton.vue";

export default {
  name: "Sfmodal",
  props: {
    /**
     * Cross closing modal button
     */
    cross: {
      type: Boolean,
      default: false
    },
    /**
     * Visibility of the modal
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * Modal title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Modal subtitle
     */
    subtitle: {
      type: String,
      default: ""
    },
    /** content of the modal */
    description: {
      type: String,
      default: ""
    },
    /** text that will be displayed inside the button. You can replace the button  with "call-to-action" slot */
    buttonText: {
      type: String,
      default: ""
    }
  },
  mounted() {
    const keydownHandler = e => {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.$emit("close");
      }
    };
    document.addEventListener("keydown", keydownHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", keydownHandler);
    });
  },
  watch: {
    visible: {
      handler: value => {
        if (value && typeof window !== "undefined") {
          window.document.querySelector("body").style.overflow = "hidden";
        }
        if (!value && typeof window !== "undefined") {
          window.document.querySelector("body").style.overflow = "visible";
        }
      },
      immediate: true
    }
  },
  components: {
    SfButton
  }
};
