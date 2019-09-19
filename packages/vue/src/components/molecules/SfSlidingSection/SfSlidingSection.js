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
      isActive: true,
      desktopMin: 1024,
      style: {}
    };
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.isActive = !mobile;
      },
      immediate: true
    },
    isScrollLock: {
      handler(scroll) {
        if (!scroll) {
          this.scrollUnlock();
          return;
        }
        this.scrollLock();
      },
      immediate: true
    },
    isActive: {
      handler(active){
        if(!active){
          this.isScrollLock = true;
          return;
        }
        // touch overload and close
        this.isScrollLock = false;
      },
      immediate: true
    }
  },
  methods: {
    preventDefault(e){
      e.preventDefault();
    },
    scrollLock() {
      document.body.style.setProperty("overflow", "hidden");
      window.addEventListener("touchstart", this.preventDefault, {passive: false});
    },
    scrollUnlock() {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("touchstart", this.preventDefault, {passive: false});
    },
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
