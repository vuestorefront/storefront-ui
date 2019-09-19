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
      isActive: false,
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
          // unregister eventsA & eventsB
          console.log("unregister eventsA & eventsB");
          this.clearMobileEvents();
          return;
        }
        this.isScrollLock = true;
        // register eventsA
        console.log("register eventsA");
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
          // register eventsA
          console.log("register eventsA");
          this.notActiveEvents();
          return;
        }
        this.isScrollLock = false;
        // register eventsB
        console.log("register eventsB");
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
    // events A
    notActiveEvents() {
      // unregister events B
      window.removeEventListener("touchend", this.scrollOverload, {
        passive: true
      });
      // register events A
      window.addEventListener("touchend", this.open, { passive: true });
      window.addEventListener("wheel", this.open, { passive: true });
    },
    // events B
    activeEvents() {
      // unregister events A
      window.removeEventListener("touchend", this.open, { passive: true });
      window.removeEventListener("wheel", this.open, { passive: true });
      // register events B
      window.addEventListener("touchend", this.scrollOverload, {
        passive: true
      });
    },
    clearMobileEvents() {
      //unregiser events A
      // uregister events B
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
