import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfSlidingSection",
  components: {
    SfIcon
  },
  data() {
    return {
      isActive: false,
      isMobile: false,
      hasScrollLock: false,
      desktopMin: 1024,
      hammer: undefined,
      hasStaticHeight: false
    };
  },
  watch: {
    isMobile(mobile) {
      if (typeof window === "undefined") return;
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
      if (typeof window === "undefined") return;
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
      if (typeof window === "undefined") return;
      if (!scrollLock) {
        this.scrollUnlock();
        return;
      }
      this.scrollLock();
    }
  },
  mounted() {
    import("hammerjs").then(h => {
      const Hammer = h.default;
      this.hammer = new Hammer(document, {
        enable: false
      }).on("pan", this.touchHandler);
      this.isMobileHandler();
      window.addEventListener("resize", this.isMobileHandler, {
        passive: true
      });
    });
  },
  beforeDestroy() {
    this.scrollUnlock();
    this.hammer.destroy();
  },
  methods: {
    touchPreventDefault(e) {
      e.preventDefault();
    },
    isMobileHandler() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        this.desktopMin;
    },
    scrollLock() {
      window.scrollTo(0, 0);
      document.body.classList.add("sf-sliding-section--has-scroll-lock");
      window.addEventListener("touchmove", this.touchPreventDefault, {
        passive: false
      });
    },
    scrollUnlock() {
      document.body.classList.remove("sf-sliding-section--has-scroll-lock");
      window.removeEventListener("touchmove", this.touchPreventDefault, {
        passive: false
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
    }
  }
};
