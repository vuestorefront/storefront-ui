import Vue from "vue";
import SfContentPage from "./_internal/SfContentPage.vue";
import SfContentCategory from "./_internal/SfContentCategory.vue";

Vue.component("SfContentPage", SfContentPage);
Vue.component("SfContentCategory", SfContentCategory);

import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfContentPages",
  components: {
    SfList,
    SfMenuItem,
    SfIcon
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
      categories: [],
      isMobile: false,
      desktopMin: 1024
    };
  },
  provide() {
    const categories = {};
    const component = {};
    Object.defineProperty(component, "active", {
      get: () => this.active
    });
    Object.defineProperty(categories, "updateCategories", {
      value: this.updateCategories
    });

    return { categories, component };
  },
  watch: {
    isMobile(mobile) {
      if (typeof window === "undefined") return;
      if (mobile) {
        this.$emit("click:change", "");
        return;
      }
      this.$emit("click:change", this.categories[0].pages[0].title);
    }
  },
  methods: {
    updateCategories(page) {
      this.categories.push(page);
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
