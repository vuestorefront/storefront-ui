import {Fragment} from "vue-fragment";
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
export default {
  name: "SfAccordionItem",
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    header: {
      type: String,
      default: ""
    },
    selected: {
      type: String,
      default: ""
    },
    contentItems: {
      type: Array,
      default: () => []
    }
  },
  components: {
    SfChevron,
    Fragment
  },
  mounted() {
    this.$parent.$emit("accordion-item-ready");
  },
  methods: {
    onHeaderClick() {
      this.$parent.$emit("toggle", this._uid);
    },
    onContentItemClick(id) {
      this.$parent.$emit("click", id);
    }
  }
};
