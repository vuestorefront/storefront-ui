<template>
  <section class="sf-sliding-section" :class="{ 'is-active': isActive }">
    <div ref="static" class="sf-sliding-section__static">
      <!-- @slot Use this slot to place static content. -->
      <slot name="static" />
    </div>
    <div class="sf-sliding-section__sliding">
      <div class="sf-sliding-section__mobile-bar">
        <!-- @slot Use this slot to replace close icon -->
        <slot name="close" v-bind="{ closeHandler }">
          <SfButton
            class="sf-button--pure sf-sliding-section__close"
            aria-label="Close"
            @click="closeHandler"
          >
            <SfIcon icon="cross" size="14px" />
          </SfButton>
        </slot>
      </div>
      <!-- @slot Use this slot to place sliding content. -->
      <slot name="sliding" v-bind="{ isActive }" />
    </div>
  </section>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import {
  mapMobileObserver,
  unMapMobileObserver,
} from "../../../utilities/mobile-observer";
import { isClient } from "../../../utilities/helpers";

export default {
  name: "SfSlidingSection",
  components: {
    SfIcon,
    SfButton,
  },
  data() {
    return {
      isActive: false,
      hasScrollLock: false,
      hammer: undefined,
      hasStaticHeight: false,
    };
  },
  computed: {
    ...mapMobileObserver(),
  },
  watch: {
    isMobile(mobile) {
      if (!isClient) return;
      if (!mobile) {
        this.isActive = false;
        this.hasScrollLock = false;
        this.hammer.set({ enable: false });
        return;
      }
      this.hasScrollLock = true;
      this.hammer.set({ enable: true });
    },
    isActive(active) {
      if (!isClient) return;
      if (!active) {
        this.hasStaticHeight = false;
        if (!this.isMobile) {
          this.hasScrollLock = false;
          return;
        }
        this.hasScrollLock = true;
        return;
      }
      this.hasScrollLock = false;
    },
    hasScrollLock(scrollLock) {
      if (!isClient) return;
      if (!scrollLock) {
        this.scrollUnlock();
        return;
      }
      this.scrollLock();
    },
  },
  mounted() {
    import("hammerjs").then((h) => {
      const Hammer = h.default;
      this.hammer = new Hammer(document, {
        enable: false,
      }).on("pan", this.touchHandler);
    });
  },
  beforeDestroy() {
    this.scrollUnlock();
    unMapMobileObserver();
    this.hammer.destroy();
  },
  methods: {
    touchPreventDefault(e) {
      e.preventDefault();
    },
    scrollLock() {
      window.scrollTo(0, 0);
      document.body.classList.add("sf-sliding-section--has-scroll-lock");
      window.addEventListener("touchmove", this.touchPreventDefault, {
        passive: false,
      });
    },
    scrollUnlock() {
      document.body.classList.remove("sf-sliding-section--has-scroll-lock");
      window.removeEventListener("touchmove", this.touchPreventDefault, {
        passive: false,
      });
    },
    touchHandler(event) {
      const { direction, isFinal } = event;
      if (!this.hasStaticHeight && this.$refs.static.offsetHeight > 0) {
        this.hasStaticHeight = true;
        this.$refs.static.style.setProperty(
          "height",
          `${this.$refs.static.offsetHeight}px`
        );
      }
      if (!this.isActive && isFinal && direction === 8) {
        this.isActive = true;
      }
      if (this.isActive && isFinal && direction === 16) {
        this.isActive = false;
      }
    },
    closeHandler() {
      this.isActive = false;
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfSlidingSection.scss";
</style>
