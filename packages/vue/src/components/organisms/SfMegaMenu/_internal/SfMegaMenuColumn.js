export default {
  name: "SfMegaMenuColumn",
  inject: ["provided"],
  data() {
    return {
      isMobile: false,
      desktopMin: 1024
    };
  },
  props: {
    /**
     * Column title
     */
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    isActive() {
      return this.provided.active === this.title;
    }
  },
  mounted() {
    this.provided.updateColumns(this.title);
    this.isMobileHandler();
    window.addEventListener("resize", this.isMobileHandler, { passive: true });
  },
  methods: {
    isMobileHandler() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        this.desktopMin;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.isMobileHandler, {
      passive: true
    });
  }
};
