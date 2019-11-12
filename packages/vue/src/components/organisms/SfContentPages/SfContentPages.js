import Vue from "vue";
import SfContentPage from "./_internal/SfContentPage.vue";

Vue.component("SfContentPage", SfContentPage);

import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";

export default {
  name: "SfContentPages",
  components: {
    SfList,
    SfMenuItem
  },
  props: {
    /**
     * Pages title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Active page
     */
    active: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      pages: [],
      isMobile: false,
      desktopMin: 1024
    };
  },
  provide() {
    const provided = {};

    Object.defineProperty(provided, "active", {
      get: () => this.active
    });
    Object.defineProperty(provided, "updatePages", {
      value: this.updatePages
    });

    return { provided };
  },
  watch: {
    isMobile(mobile) {
      if (typeof window === "undefined") return;
      if (mobile) {
        this.$emit("click:change", "");
        return;
      }
      this.$emit("click:change", this.pages[0]);
    }
  },
  methods: {
    updatePages(title) {
      if (this.pages.includes(title)) return;
      this.pages.push(title);
    },
    updatePage(title) {
      /**
       * Active page updated event
       *
       * @event click:change
       * @type String
       */
      this.$emit("click:change", title);
    },
    isMobileHandler() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        this.desktopMin;
    }
  },
  mounted() {
    this.isMobileHandler();
    window.addEventListener("resize", this.isMobileHandler, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.isMobileHandler, {
      passive: true
    });
  }
};
