// @vue/component
import Vue from "vue";
import SfMegaMenuColumn from "./_internal/SfMegaMenuColumn.vue";

Vue.component("SfMegaMenuColumn", SfMegaMenuColumn);

import SfList from "../SfList/SfList.vue";
import SfMenuItem from "../../molecules/SfMenuItem/SfMenuItem.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfMegaMenu",
  components: {
    SfList,
    SfMenuItem,
    SfIcon
  },
  model: {
    prop: "active",
    event: "change"
  },
  props: {
    /**
     * Active column
     */
    active: {
      type: Array,
      default: () => { [] }
    },
    root: {
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
    isActive(){
      return this.active.length > 0
    }
  },
  watch: {
    isMobile: {
      handler(mobile) {
        let active;
        this.$nextTick(() => {
          if (mobile) {
            active = [];
          } else {
            active = [...this.items];
          }
          this.$emit("change", active);
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
      this.$emit("change", payload);
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
