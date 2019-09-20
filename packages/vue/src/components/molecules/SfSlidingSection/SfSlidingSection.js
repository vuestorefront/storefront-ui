import Hammer from "hammerjs";
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
      hammer: undefined
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
        this.$refs.static.style.removeProperty("height");
        if (!this.isMobile) {
          this.hasScrollLock = false;
          return;
        }
        this.hasScrollLock = true;
        return;
      }
      this.$refs.static.style.setProperty("height", 0);
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
      const { distance, direction } = event;
      console.log(direction, this.isActive);
      if (!this.isActive && direction === 8) {
        this.isActive = true;
      }
      console.log(this.isActive && direction === 16);
      if (this.isActive && direction === 16) {
        this.isActive = false;
      }
    }
  },
  mounted() {
    this.isMobileHandler();
    window.addEventListener("resize", this.isMobileHandler, { passive: true });
    this.hammer = new Hammer(window, { enable: false }).on(
      "pan",
      this.touchHandler
    );
  }
};
