import Vue from "vue";
import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";

Vue.component("SfMegaMenuColumn", SfMegaMenuColumn);

import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";

export default {
  name: "SfMegaMenu",
  components: {
    SfList,
    SfMenuItem
  },
  props: {
    /**
     * Column title
     */
      type: String,
      default: ""
    },
    /**
     * Active column
     */
    active: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      columns: [],
      isMobile: false,
      desktopMin: 1024
    };
  },
  provide() {
    const provided = {};

    Object.defineProperty(provided, "active", {
      get: () => this.active
    });
    Object.defineProperty(provided, "updateColumns", {
      value: this.updateColumns
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
      this.$emit("click:change", this.columns[0]);
    }
  },
  methods: {
    updateColumns(title) {
      if (this.columns.includes(title)) return;
      this.columns.push(title);
    },
    updateColumn(title) {
      /**
       * Active column updated event
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
