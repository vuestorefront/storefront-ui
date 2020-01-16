<template>
  <Portal>
    <div ref="sidebar" class="sf-sidebar" :class="[staticClass, className]">
      <SfOverlay :visible="visibleOverlay" @click="close" />
      <transition :name="'slide-' + position">
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
  </Portal>
</template>
<script>
import { Portal } from "@linusborg/vue-simple-portal";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfOverlay from "../../atoms/SfOverlay/SfOverlay.vue";
import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
export default {
  name: "SfSidebar",
  components: {
    Portal,
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
      position: "left"
    };
  },
  computed: {
    visibleOverlay() {
      return this.visible && this.overlay;
    },
    staticClass() {
      return this.$vnode.data.staticClass;
    },
    className() {
      return this.$vnode.data.class;
    }
  },
  watch: {
    visible: {
      handler(value) {
        if (typeof window === "undefined") return;
        if (value) {
          disableBodyScroll(this.$refs.content);
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
    this.$nextTick(() => {
      this.position = this.$refs.sidebar.classList.contains("sf-sidebar--right")
        ? "right"
        : "left";
    });
  },
  methods: {
    close() {
      this.$emit("close");
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
@import "~@storefront-ui/shared/styles/components/SfSidebar.scss";
</style>
