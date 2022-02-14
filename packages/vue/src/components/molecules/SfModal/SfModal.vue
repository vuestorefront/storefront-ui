<template>
  <section class="sf-modal" :class="[staticClass, className]">
    <SfOverlay
      v-if="overlay"
      class="sf-modal__overlay"
      :transition="transitionOverlay"
      :visible="visible"
    >
    </SfOverlay>
    <transition :name="transitionModal">
      <div
        v-if="visible"
        v-focus-trap
        v-click-outside="checkPersistence"
        class="sf-modal__container"
      >
        <slot name="modal-bar">
          <SfBar
            class="sf-modal__bar smartphone-only"
            :close="cross"
            :title="title"
            @click:close="close"
          />
        </slot>
        <SfButton
          :class="{ 'display-none': !cross }"
          class="sf-button--pure sf-modal__close desktop-only"
          aria-label="Close modal"
          type="button"
          :data-testid="dataTestDisplay('close-button')"
          @click="close"
        >
          <slot name="close">
            <SfIcon icon="cross" size="0.875rem" color="gray-secondary" />
          </slot>
        </SfButton>
        <div ref="content" class="sf-modal__content">
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
import { dataTestDisplay } from "../../../utilities/helpers";

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
    title: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    cross: {
      type: Boolean,
      default: true,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    persistent: {
      type: Boolean,
      default: false,
    },
    transitionOverlay: {
      type: String,
      default: "sf-fade",
    },
    transitionModal: {
      type: String,
      default: "sf-fade",
    },
  },
  data() {
    return {
      staticClass: null,
      className: null,
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
  beforeDestroy() {
    clearAllBodyScrollLocks();
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
    dataTestDisplay,
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfModal.scss";
</style>
