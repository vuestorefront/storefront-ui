import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfSlidingSection",
  components: {
    SfIcon
  },
  data() {
    return {
      isMobile: false,
      isScrollLock: false,
      isActive: false, // can't set init true value
      desktopMin: 1024,
      style: {}
    };
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.isActive = false;
        if (!mobile) {
          this.isScrollLock = false;
          this.clearMobileEvents();
          return;
        }
        this.isScrollLock = true;
        this.notActiveEvents();
      }
    },
    isScrollLock: {
      handler(scroll) {
        if (!scroll) {
          this.scrollUnlock();
          return;
        }
        this.scrollLock();
      }
    },
    isActive: {
      handler(active) {
        if (!active) {
          this.isScrollLock = this.isMobile;
          this.notActiveEvents();
          return;
        }
        this.isScrollLock = false;
        this.activeEvents();
      }
    }
  },
  methods: {
    preventDefault(e) {
      e.preventDefault();
    },
    scrollLock() {
      document.body.style.setProperty("overflow", "hidden");
      window.addEventListener("touchstart", this.preventDefault, {
        passive: false
      });
      window.addEventListener("touchmove", this.preventDefault, {
        passive: false
      });
    },
    scrollUnlock() {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("touchstart", this.preventDefault, {
        passive: false
      });
      window.removeEventListener("touchmove", this.preventDefault, {
        passive: false
      });
    },
    open() {
      this.isActive = true;
    },
    close() {
      this.isActive = false;
    },
    scrollOverload(e) {
      const { pageYOffset } = window;
      if (pageYOffset < 0) {
        this.close();
      }
    },
    notActiveEvents() {
      window.removeEventListener("touchend", this.scrollOverload, {
        passive: true
      });
      window.addEventListener("touchend", this.open, { passive: true });
    },
    activeEvents() {
      window.removeEventListener("touchend", this.open, { passive: true });
      window.addEventListener("touchend", this.scrollOverload, {
        passive: true
      });
    },
    clearMobileEvents() {
      window.removeEventListener("touchend", this.open, { passive: true });
      window.removeEventListener("touchend", this.scrollOverload, {
        passive: true
      });
    }
  },
  mounted() {
    this.isMobile =
      Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <
      this.desktopMin;
    window.addEventListener(
      "resize",
      () => {
        this.isMobile =
          Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
          ) < this.desktopMin;
      },
      { passive: true }
    );
  }
};
