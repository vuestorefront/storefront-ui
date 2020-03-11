<template>
  <div class="sf-sidebar" :class="[staticClass, className]">
    <SfOverlay :visible="visibleOverlay" @click="close" />
    <transition :name="transitionName">
      <aside v-if="visible" class="sf-sidebar__aside">
        <div class="sf-sidebar__top">
          <slot name="top-bar">
            <SfBar
              :title="title"
              class="mobile-only"
              :back="true"
              @click:back="close"
            />
          </slot>
          <slot name="title" v-bind="{ title, subtitle, headingLevel }">
            <SfHeading
              v-if="title"
              :title="title"
              :subtitle="subtitle"
              :level="headingLevel"
              class="sf-heading--left sf-heading--no-underline sf-sidebar__title desktop-only"
            />
          </slot>
          <slot
            v-if="position === 'right'"
            name="icon"
            v-bind="{ close, button }"
          >
            <SfIcon
              v-if="button"
              icon="cross"
              size="14px"
              role="button"
              aria-label="close"
              class="sf-sidebar__icon desktop-only"
              @click="close"
            />
          </slot>
          <slot v-else name="circle-icon" v-bind="{ close, button }">
            <SfCircleIcon
              v-if="button"
              icon-size="14px"
              icon="cross"
              class="sf-sidebar__circle-icon desktop-only"
              @click="close"
            />
          </slot>
        </div>
        <!--@slot Use this slot to place content inside the modal bar.-->
        <div ref="content" class="sf-sidebar__content">
          <slot />
        </div>
        <SfSticky class="sf-sidebar__bottom">
          <slot name="bottom" />
        </SfSticky>
      </aside>
    </transition>
  </div>
</template>
<script>
import SfBar from "../../molecules/SfBar/SfBar.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfSticky from "../../molecules/SfSticky/SfSticky.vue";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
export default {
  name: "SfSidebar",
  components: {
    SfBar,
    SfCircleIcon,
    SfIcon,
    SfOverlay,
    SfSticky,
    SfHeading
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    headingLevel: {
      type: Number,
      default: 3
    },
    button: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    }
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
      return "slide-" + this.position;
    }
  },
  watch: {
    visible: {
      handler(value) {
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
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfSidebar.scss";
</style>
