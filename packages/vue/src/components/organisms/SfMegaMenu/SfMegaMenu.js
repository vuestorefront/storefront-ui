// @vue/component
import Vue from "vue";
import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";
import SfMegaMenuItem from "./_internal/SfMegaMenuItem.vue";

Vue.component("SfMegaMenuColumn", SfMegaMenuColumn);
Vue.component("SfMegaMenuItem", SfMegaMenuItem);

import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfBar from "../../molecules/SfBar/SfBar.vue";

export default {
  name: "SfMegaMenu",
  components: {
    SfList,
    SfMenuItem,
    SfBar
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: [],
      items: [],
      isMobile: false,
      desktopMin: 1024
    };
  },
  computed: {
    isActive() {
      return this.active.length > 0;
    }
  },
  provide() {
    const megaMenu = {};
    Object.defineProperty(megaMenu, "active", {
      get: () => this.active
    });
    Object.defineProperty(megaMenu, "updateItems", {
      value: this.updateItems
    });
    return { megaMenu };
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.$nextTick(() => {
          this.active = mobile ? [] : [...this.items];
        });
      },
      immediate: true
    },
    visible: {
      handler(visible) {
        if (!visible) return;
        if (this.isMobile) return;
        this.$nextTick(() => {
          this.active = [...this.items];
        });
      },
      immediate: true
    }
  },
  methods: {
    updateItems(title) {
      if (this.items.includes(title)) return;
      this.items.push(title);
    },
    change(payload) {
      this.active = payload ? [payload] : [];
      this.$emit("change", payload ? payload : "");
    },
    isMobileHandler(e) {
      this.isMobile = e.matches;
    }
  },
  mounted() {
    this.isMobile =
      Math.max(document.documentElement.clientWidth, window.innerWidth) <
      this.desktopMin;
    window
      .matchMedia(`(max-width: ${this.desktopMin}px)`)
      .addListener(this.isMobileHandler);
  },
  beforeDestroy() {
    window
      .matchMedia(`(max-width: ${this.desktopMin}px)`)
      .removeListener(this.isMobileHandler);
  }
};
