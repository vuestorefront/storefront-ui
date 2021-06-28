<template>
  <div class="sf-sidebar" :class="[staticClass, className]">
    <SfOverlay :visible="visibleOverlay" />
    <transition :name="transitionName">
      <aside
        v-if="visible"
        ref="asideContent"
        v-focus-trap
        v-click-outside="checkPersistence"
        class="sf-sidebar__aside"
      >
        <!--@slot Use this slot to place content inside the modal bar.-->
        <slot name="bar">
          <SfBar
            :title="title"
            class="smartphone-only"
            :back="true"
            @click:back="close"
          />
        </slot>
        <!--@slot Use this slot to replace close icon.-->
        <slot name="circle-icon" v-bind="{ close, button }">
          <SfCircleIcon
            v-if="button"
            icon-size="12px"
            aria-label="Close sidebar"
            icon="cross"
            class="sf-sidebar__circle-icon desktop-only"
            @click="close"
          />
        </slot>
        <div v-if="title || hasTop" class="sf-sidebar__top">
          <!--@slot Use this slot to replace SfHeading component.-->
          <slot name="title" v-bind="{ title, subtitle, headingLevel }">
            <SfHeading
              v-if="title"
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
          <!--@slot Use this slot to add sticky top content.-->
          <slot name="content-top" />
        </div>
        <div class="sf-sidebar__content">
          <!--@slot Use this slot to add SfSidebar content.-->
          <slot />
        </div>
        <!--@slot Use this slot to place content to sticky bottom.-->
        <div v-if="hasBottom" class="sf-sidebar__bottom">
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
    /**
     * The sidebar's title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * The sidebar's subtitle
     */
    subtitle: {
      type: String,
      default: "",
    },
    /**
     * The heading's level
     */
    headingLevel: {
      type: Number,
      default: 3,
    },
    /**
     * The close button
     */
    button: {
      type: Boolean,
      default: true,
    },
    /**
     * The sidebar's visibility
     */
    visible: {
      type: Boolean,
      default: false,
    },
    /**
     * The overlay's visibility
     */
    overlay: {
      type: Boolean,
      default: true,
    },
    /**
     * If true clicking outside will not dismiss the sidebar
     */
    persistent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      position: "left",
      staticClass: null,
      className: null,
    };
  },
  computed: {
    visibleOverlay() {
      return this.visible && this.overlay;
    },
    transitionName() {
      return "sf-slide-" + this.position;
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
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.classHandler();
  },
  updated() {
    this.classHandler();
  },
  methods: {
    close() {
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
    classHandler() {
      let update = false;
      if (this.staticClass !== this.$vnode.data.staticClass) {
        this.staticClass = this.$vnode.data.staticClass;
        update = true;
      }
      if (this.className !== this.$vnode.data.class) {
        this.className = this.$vnode.data.class;
        update = true;
      }
      if (update) {
        this.position =
          [this.staticClass, this.className].toString().search("--right") > -1
            ? "right"
            : "left";
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfSidebar.scss";
</style>
