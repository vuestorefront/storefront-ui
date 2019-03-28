import SfButton from "@/components/atoms/SfButton/SfButton.vue";
import { string } from "postcss-selector-parser";

export default {
  name: "SfBanner",
  props: {
    title: String,
    subtitle: String,
    description: String,
    buttonText: String
  },
  components: {
    SfButton
  }
};
