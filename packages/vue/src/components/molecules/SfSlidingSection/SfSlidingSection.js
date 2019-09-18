import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfSlidingSection",
  components: {
    SfIcon
  },
  data() {
    return {
      isActive: false,
      viewportWidth: 0,
      desktopMin: 1024,
      style: {}
    };
  },
  watch: {
    viewportWidth: {
      handler: function(width) {
        if (width >= this.desktopMin) {
          this.isActive = false;
          this.enableScroll();
          return;
        }
        this.disableScroll();
        window.addEventListener("touchend", this.openSliding, {passive: true})
      },
      immediate: true
    },
  },
  methods: {
    preventDefault(e) {
      e.preventDefault();
    },
    disableScroll() {
      document.body.classList.add("sf-sliding-section-scroll--is-disabled");
      window.addEventListener("touchmove", this.preventDefault, {
        passive: false
      });
    },
    enableScroll() {
      document.body.classList.remove("sf-sliding-section-scroll--is-disabled");
      window.removeEventListener("touchmove", this.preventDefault, {
        passive: false
      });
    },
    openSliding(){
      if (!this.style.height) {
        this.style = { height: this.$refs.top.offsetHeight + "px" };
      }
      this.isActive = true;
      this.enableScroll();
      window.removeEventListener("touchend", this.openSliding, {passive: true})
      window.addEventListener("touchend", this.closeHandler, {passive: true})
    },
    closeHandler() {
      if(window.pageYOffset < -50){
        this.isActive = false;
        this.disableScroll();
      }
    }
  },
  mounted() {
    this.viewportWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth
    );
    window.addEventListener(
      "resize",
      () => {
        this.viewportWidth = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth
        );
      },
      { passive: true }
    );
  }
};
