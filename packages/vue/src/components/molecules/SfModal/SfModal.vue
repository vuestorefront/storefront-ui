<template>
  <section class="sf-modal" :class="[staticClass, className]">
    <SfOverlay
      v-if="overlay"
      class="sf-modal__overlay"
      :transition="transitionOverlay"
      :visible="visible"
      @click="checkPersistence"
    >
    </SfOverlay>
    <transition :name="transitionModal">
      <div v-if="visible" class="sf-modal__container">
        <button v-if="cross" class="sf-modal__close" @click="close">
          <!--@slot Use this slot to place content inside the close button.-->
          <slot name="close">
            <SfIcon icon="cross" size="15px" color="gray-secondary" />
          </slot>
        </button>
        <div ref="content" class="sf-modal__content">
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
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
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
  data() {
    return {
      staticClass: null,
      className: null
    };
  },
  watch: {
    visible: {
      handler: function(value) {
        if (typeof window === "undefined" || typeof document === "undefined")
          return;
        if (value) {
          this.$nextTick(() => {
            disableBodyScroll(this.$refs.content);
          });
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          clearAllBodyScrollLocks();
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
    },
    classHandler() {
      if (this.staticClass !== this.$vnode.data.staticClass) {
        this.staticClass = this.$vnode.data.staticClass;
      }
      if (this.className !== this.$vnode.data.class) {
        this.className = this.$vnode.data.class;
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfModal.scss";
</style>
