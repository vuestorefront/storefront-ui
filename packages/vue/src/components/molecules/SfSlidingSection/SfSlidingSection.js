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
      // window.removeEventListener("touchend", this.scrollOverload, {
      //   passive: true
      // });
      // window.addEventListener("touchend", this.open, { passive: true });
    },
    activeEvents() {
      // window.removeEventListener("touchend", this.open, { passive: true });
      // window.addEventListener("touchend", this.scrollOverload, {
      //   passive: true
      // });
    },
    clearMobileEvents() {
      window.removeEventListener("touchend", this.open, { passive: true });
      window.removeEventListener("touchend", this.scrollOverload, {
        passive: true
      });
    },
    foo(){
      const h = this.$refs.static.offsetHeight;
      console.log(h);
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
    const h = new Hammer(window);
    h.on("pan", (e) => {
      console.log(e.isFirst)
      if(this.staticHeight < 0){
        this.staticHeight = this.$refs.static.offsetHeight
      }
      console.log(this.$refs.static);
      this.$refs.static.style = `height:${this.staticHeight - Math.round(e.distance)}px`
      console.log(this.staticHeight - Math.round(e.distance));
      if(e.isFinal){
        this.staticHeight = -1;
        this.isActive =true
      }
    });
  }
};
