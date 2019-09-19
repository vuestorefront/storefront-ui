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
      staticHeight: -1,
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
      if (this.isActive && e.isFinal && window.pageYOffset < -50) {
        this.isActive = false;
        return;
      }
      if (this.staticHeight < 0) {
        this.staticHeight = this.$refs.static.offsetHeight;
      }
      if (e.deltaY <= 0) {
        this.$refs.static.style.setProperty(
          "height",
          `${this.staticHeight + e.deltaY}px`
        );
      }
      if (e.isFinal && e.distance > 50 && e.deltaY <= 0) {
        this.isActive = true;
        this.staticHeight = -1;
        this.$refs.static.style.removeProperty("height");
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
    this.hammer = new Hammer(this.$refs.sliding, { enable: false });
    this.hammer.on("pan", this.hammerHandler);
  }
};
