<template>
  <section
    class="sf-modal"
    :class="{ staticClass, className, jsEnabled: jsEnabled }"
  >
    <SfOverlay
      v-if="overlay"
      class="sf-modal__overlay"
      :transition="transitionOverlay"
      :visible="visible"
    >
    </SfOverlay>
    <transition :name="transitionModal">
      <div
        v-if="jsEnabled ? visible : true"
        v-focus-trap
        v-click-outside="checkPersistence"
        class="sf-modal__container"
      >
        <!--@slot Use this slot to place content inside the modal bar.-->
        <slot name="modal-bar">
          <SfBar class="sf-modal__bar smartphone-only" :title="title">
            <template #close="{ jsEnabled }">
              <SfButton
                :link="jsEnabled ? null : '#'"
                class="sf-button--pure sf-bar__icon"
                aria-label="close"
                type="button"
                @click="close"
              >
                <SfIcon icon="cross" size="14px" />
              </SfButton>
            </template>
          </SfBar>
        </slot>
        <SfButton
          v-if="cross"
          :link="jsEnabled ? null : '#'"
          class="sf-button--pure sf-modal__close desktop-only"
          aria-label="Close modal"
          type="button"
          data-testid="close-button"
          @click="close"
        >
          <!--@slot Use this slot to place content inside the close button.-->
          <slot name="close">
            <SfIcon icon="cross" size="0.875rem" color="gray-secondary" />
          </slot>
        </SfButton>
        <div ref="content" class="sf-modal__content">
          <!--@slot Use this slot to place content inside the modal.-->
          <slot />
        </div>
      </div>
    </transition>
  </section>
</template>
<script>
import SfBar from "../../molecules/SfBar/SfBar.vue";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { focusTrap } from "../../../utilities/directives";
import { clickOutside } from "../../../utilities/directives";
import { isClient } from "../../../utilities/helpers";
export default {
  name: "SfModal",
  directives: { focusTrap, clickOutside },
  components: {
    SfBar,
    SfOverlay,
    SfIcon,
    SfButton,
  },
  model: {
    prop: "visible",
    event: "close",
  },
  props: {
    /**
     * Heading title of the modal
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Visibility of the modal
     */
    visible: {
      type: Boolean,
      default: false,
    },
    /**
     * Cross closing modal button
     */
    cross: {
      type: Boolean,
      default: true,
    },
    /**
     * Whether to show the overlay
     */
    overlay: {
      type: Boolean,
      default: true,
    },
    /**
     * If true clicking outside will not dismiss the modal
     */
    persistent: {
      type: Boolean,
      default: false,
    },
    /**
     * overlay transition effect
     */
    transitionOverlay: {
      type: String,
      default: "sf-fade",
    },
    /**
     * overlay transition effect
     */
    transitionModal: {
      type: String,
      default: "sf-fade",
    },
  },
  data() {
    return {
      staticClass: null,
      className: null,
      jsEnabled: false,
    };
  },
  watch: {
    visible: {
      handler: function (value) {
        if (!isClient) return;
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
      immediate: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      return (this.jsEnabled = true);
    });
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
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfModal.scss";
</style>
