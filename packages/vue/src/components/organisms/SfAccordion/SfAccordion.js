import Vue from 'vue';
import SfAccordionItem from './_internal/SfAccordionItem.vue';

Vue.component("SfAccordionItem", SfAccordionItem);

export default {
  name: "SfAccordion",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  // data() {
  //   return {};
  // },
  methods: {
    toggleCurrent($event) {
      console.log($event);
      const clickedAccordionContent = $event.target.nextElementSibling;
      if (clickedAccordionContent.className.includes("sf-accordion__content--show")) {
        clickedAccordionContent.classList.remove("sf-accordion__content--show");
      } else {
        const openedAccordionElement = Array.prototype.slice.call(document.getElementsByClassName('sf-accordion__content--show'), 0)[0];
        openedAccordionElement
          ? openedAccordionElement.classList.remove("sf-accordion__content--show")
          : '';
        clickedAccordionContent.classList.add("sf-accordion__content--show");
      }
    },
    print($event) {
      console.log($event)
    }
  },
  components: {
    SfAccordionItem
  }
};
