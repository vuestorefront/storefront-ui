import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import Hammer from "hammerjs";
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
      hammer: undefined
    };
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.isActive = false;
        if (!mobile) {
          this.isScrollLock = false;
          this.hammer.set({ enable: false });
          return;
        }
        this.isScrollLock = true;
        this.hammer.set({ enable: true });
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
          return;
        }
        this.isScrollLock = false;
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
    hammerHandler(e) {
      if (!e.isFinal) return;
      if (e.direction === 8 && !this.isActive) {
        this.isActive = true;
      }
      if (e.direction === 16 && this.isActive && window.pageYOffset <= 0) {
        this.isActive = false;
      }
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
    this.hammer = new Hammer(window, { enable: true });
    this.hammer.on("pan", this.hammerHandler);
  }
};
