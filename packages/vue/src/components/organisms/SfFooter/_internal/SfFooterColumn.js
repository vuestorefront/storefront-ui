import SfAccordion from "../../SfAccordion/SfAccordion.vue";
import SfChevron from "../../../atoms/SfChevron/SfChevron.vue";
export default {
  name: "SfFooterColumn",
  components: {
    SfAccordion,
    SfChevron
  },
  props: {
    /**
     * Column heading
     */
    title: {
      type: String,
      default: ""
    }
  }
};
