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
<script lang="ts">
import { PropType } from "vue";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import { SfSidebarData, SfSidebarProps } from "./SfSidebar.model";
import { focusTrap } from "../../../utilities/directives/";
import { clickOutside } from "../../../utilities/directives/";
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
      type: String as PropType<SfSidebarProps["title"]>,
      default: "",
    },
    subtitle: {
      type: String as PropType<SfSidebarProps["subtitle"]>,
      default: "",
    },
    headingLevel: {
      type: Number as PropType<SfSidebarProps["headingLevel"]>,
      default: 3,
    },
    button: {
      type: Boolean as PropType<SfSidebarProps["button"]>,
      default: true,
    },
    visible: {
      type: Boolean as PropType<SfSidebarProps["visible"]>,
      default: false,
    },
    overlay: {
      type: Boolean as PropType<SfSidebarProps["overlay"]>,
      default: true,
    },
    persistent: {
      type: Boolean as PropType<SfSidebarProps["persistant"]>,
      default: false,
    },
  },
  data(): SfSidebarData {
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
            if (sidebarContent) disableBodyScroll(sidebarContent);
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
  beforeDestroy() {
    clearAllBodyScrollLocks();
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
<style lang="scss" src="./SfSidebar.scss"></style>
