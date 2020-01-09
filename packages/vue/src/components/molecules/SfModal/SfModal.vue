<template>
  <section class="sf-modal">
    <SfOverlay
      v-if="overlay"
      class="sf-modal__overlay"
      :transition="transitionOverlay"
      :visible="visible"
      @click="checkPersistence"
    >
    </SfOverlay>
    <transition :name="transitionModal">
      <div v-show="visible" class="sf-modal__container">
        <button v-if="cross" class="sf-modal__close" @click="close">
          <!--@slot Use this slot to place content inside the close button.-->
          <slot name="close">
            <SfIcon icon="cross" size="15px" color="gray-secondary" />
          </slot>
        </button>
        <div class="sf-modal__content">
          <!--@slot Use this slot to place content inside the modal.-->
          <slot />
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfModal",
  components: {
    SfOverlay,
    SfIcon
  },
  model: {
    prop: "visible",
    event: "close"
  },
  props: {
    /**
     * Visibility of the modal
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * Cross closing modal button
     */
    cross: {
      type: Boolean,
      default: true
    },
    /**
     * Whether to show the overlay
     */
    overlay: {
      type: Boolean,
      default: true
    },
    /**
     * If true clicking outside will not dismiss the modal
     */
    persistent: {
      type: Boolean,
      default: false
    },
    /**
     * overlay transition effect
     */
    transitionOverlay: {
      type: String,
      default: "fade"
    },
    /**
     * overlay transition effect
     */
    transitionModal: {
      type: String,
      default: "fade"
    }
  },
  watch: {
    visible: {
      handler: function(value) {
        if (typeof window === "undefined") return;
        if (value) {
          document.body.style.setProperty("overflow", "hidden");
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          document.body.style.removeProperty("overflow");
          document.removeEventListener("keydown", this.keydownHandler);
        }
      },
      immediate: true
    }
  },
  methods: {
    close() {
      this.$emit("close", false);
    },
    checkPersistence() {
      if (!this.persistent) {
        this.close();
      }
    },
    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfModal.scss";
</style>
