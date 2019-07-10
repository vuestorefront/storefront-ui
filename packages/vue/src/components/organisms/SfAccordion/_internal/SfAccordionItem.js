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
    contentItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onHeaderClick() {
      this.$parent.$emit("toggle", this._uid);
    },
    setActiveElement() {
      const prevActive = document.getElementsByClassName("sf-accordion-item__content--active")[0];
      if (prevActive) {
        prevActive.classList.remove("sf-accordion-item__content--active");
      }
      event.target.classList.add("sf-accordion-item__content--active");
    },
    onContentItemClick(id) {
      this.setActiveElement();
      this.$parent.$emit("contentClicked", id);
    }
  }
};
