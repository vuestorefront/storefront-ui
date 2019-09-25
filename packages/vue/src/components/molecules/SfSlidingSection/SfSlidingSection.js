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
      if (!scrollLock) {
        this.scrollUnlock();
        return;
      }
      this.scrollLock();
    }
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
      window.addEventListener("touchstart", this.touchPreventDefault, {
        passive: false
      });
    },
    scrollUnlock() {
      document.body.classList.remove("sf-sliding-section--has-scroll-lock");
      window.removeEventListener("touchstart", this.touchPreventDefault, {
        passive: false
      });
    },
    touchHandler(event) {
      const { distance, direction, isFinal } = event;
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
    }
  },
  async mounted() {
    const hammer = await import("hammerjs");
    const Hammer = hammer.default;
    this.hammer = new Hammer(document, {
      enable: false,
      direction: Hammer.DIRECTION_VERTICAL
    }).on("pan", this.touchHandler);
    this.isMobileHandler();
    window.addEventListener("resize", this.isMobileHandler, { passive: true });
  }
};
