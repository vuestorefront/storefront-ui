// @vue/component
import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";

Vue.component("SfFooterColumn", SfFooterColumn);
export default {
  name: "SfFooter",
  data() {
    return {
      opened: [],
      items: []
    };
  },
  methods: {
    toggle(payload) {
      let opened = [...this.opened];
      if (opened.includes(payload)) {
        opened = opened.filter(item => item !== payload);
      } else {
        opened.push(payload);
      }
      this.opened = opened;
    }
  },
  mounted() {
    // desktop -> mobile opened = [];
    // mobile -> desktop opened = items
    this.opened = this.items;
  }
};
