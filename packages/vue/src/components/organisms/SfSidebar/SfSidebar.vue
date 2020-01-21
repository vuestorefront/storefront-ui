<template>
  <div class="sf-sidebar" :class="[staticClass, className]">
    <SfOverlay :visible="visibleOverlay" @click="close" />
    <transition :name="transitionName">
      <aside v-if="visible" class="sf-sidebar__aside">
        <div ref="content" class="sf-sidebar__content">
          <slot name="title">
            <SfHeading
              v-if="headingTitle"
              :title="headingTitle"
              :subtitle="headingSubtitle"
              :level="headingLevel"
              class="sf-heading--left sf-heading--no-underline sf-sidebar__title"
            />
          </slot>
          <slot />
        </div>
        <slot name="circle-icon">
          <SfCircleIcon
            v-if="button"
            icon-size="14px"
            icon="cross"
            class="sf-sidebar__circle-icon"
            @click="close"
          />
        </slot>
      </aside>
    </transition>
  </div>
</template>
<script>
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
export default {
  name: "SfSidebar",
  components: {
    SfCircleIcon,
    SfOverlay,
    SfHeading
  },
  props: {
    headingTitle: {
      type: String,
      default: ""
    },
    headingSubtitle: {
      type: String,
      default: ""
    },
    headingLevel: {
      type: Number,
      default: 2
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
      className: null
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
@import "~@storefront-ui/shared/styles/components/SfSidebar.scss";
</style>
