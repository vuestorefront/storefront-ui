import Vue from "vue";
import SfContentPage from "./_internal/SfContentPage.vue";
import SfContentCategory from "./_internal/SfContentCategory.vue";

Vue.component("SfContentPage", SfContentPage);
Vue.component("SfContentCategory", SfContentCategory);

import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfBar from "../../molecules/SfBar/SfBar.vue";

export default {
  name: "SfContentPages",
  components: {
    SfList,
    SfMenuItem,
    SfIcon,
    SfBar
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
      items: [],
      isMobile: false,
      desktopMin: 1024
    };
  },
  computed: {
    categories() {
      const items = [];
      const orphans = { items: [] };
      const reduceOrphans = () => {
        if (orphans.items.length > 0) {
          const category = { ...orphans };
          items.push(category);
          orphans.items = [];
        }
      };

      this.items.forEach(item => {
        if (item.items) {
          reduceOrphans();
          const category = { ...item };
          items.push(category);
          return;
        }
        orphans.items.push(item);
      });
      reduceOrphans();

      return items;
    },
    isActive() {
      return this.active.length > 0;
    }
  },
  provide() {
    const provided = {};

    Object.defineProperty(provided, "active", {
      get: () => this.active
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
      this.$emit("click:change", this.categories[0].items[0].title);
    }
  },
  methods: {
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
