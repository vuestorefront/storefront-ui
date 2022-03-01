<template>
  <div class="sf-sidebar">
    <SfOverlay :visible="visibleOverlay" />
    <transition :name="transitionName" appear>
      <aside
        v-if="visible && isOpen"
        ref="asideContent"
        v-focus-trap
        v-click-outside="checkPersistence"
        class="sf-sidebar__aside"
      >
        <slot name="bar">
          <SfBar
            :title="title"
            class="smartphone-only"
            :back="true"
            @click:back="close"
          />
        </slot>
        <slot name="circle-icon" v-bind="{ close, button }">
          <SfCircleIcon
            :class="{ 'display-none': !button }"
            icon-size="12px"
            aria-label="Close sidebar"
            icon="cross"
            class="sf-sidebar__circle-icon desktop-only"
            @click="close"
          />
        </slot>
        <div
          :class="{ 'display-none': !title || (!title && !hasTop) }"
          class="sf-sidebar__top"
        >
          <slot name="title" v-bind="{ title, subtitle, headingLevel }">
            <SfHeading
              :class="{ 'display-none': !title }"
              :title="title"
              :description="subtitle"
              :level="headingLevel"
              class="
                sf-heading--left sf-heading--no-underline
                sf-sidebar__title
                desktop-only
              "
            />
          </slot>
          <slot name="content-top" />
        </div>
        <div class="sf-sidebar__content">
          <slot />
        </div>
        <div :class="{ 'display-none': !hasBottom }" class="sf-sidebar__bottom">
          <slot name="content-bottom" />
        </div>
      </aside>
    </transition>
  </div>
</template>
<script>
import { focusTrap } from "../../../utilities/directives/";
import { clickOutside } from "../../../utilities/directives/";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { isClient } from "../../../utilities/helpers";
import SfBar from "../../molecules/SfBar/SfBar.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
export default {
  name: "SfSidebar",
  directives: { focusTrap, clickOutside },
  components: {
    SfBar,
    SfCircleIcon,
    SfOverlay,
    SfHeading,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    headingLevel: {
      type: Number,
      default: 3,
    },
    button: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    persistent: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "left",
    },
  },
  data() {
    return {
      transition: this.position,
      isOpen: this.visible,
    };
  },
  computed: {
    visibleOverlay() {
      return this.visible && this.overlay;
    },
    transitionName() {
      return "sf-slide-" + this.transition;
    },
    hasTop() {
      return this.$slots.hasOwnProperty("content-top");
    },
    hasBottom() {
      return this.$slots.hasOwnProperty("content-bottom");
    },
  },
  watch: {
    visible: {
      handler(value) {
        if (!isClient) return;
        if (value) {
          this.isOpen = true;
          this.transition = this.position;
          this.$nextTick(() => {
            const sidebarContent = document.getElementsByClassName(
              "sf-sidebar__content"
            )[0];
            disableBodyScroll(sidebarContent);
          });
          document.addEventListener("keydown", this.keydownHandler);
        } else {
          clearAllBodyScrollLocks();
          document.removeEventListener("keydown", this.keydownHandler);
          this.isOpen = false;
        }
      },
      immediate: true,
    },
    isOpen: {
      // handle out animation for async load component
      handler(value) {
        if (!isClient) return;
        if (!value) {
          this.transition = this.position === "right" ? "left" : "right";
        }
      },
    },
  },
  beforeDestroy() {
    clearAllBodyScrollLocks();
  },
  methods: {
    close() {
      this.isOpen = false;
      this.$emit("close");
    },
    checkPersistence() {
      if (!this.persistent) this.close();
    },
    keydownHandler(e) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.close();
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfSidebar.scss";
</style>
