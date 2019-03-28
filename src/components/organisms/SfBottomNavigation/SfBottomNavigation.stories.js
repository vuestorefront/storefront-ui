import { storiesOf } from "@storybook/vue";
import SfBottomNavigation from "../components/organisms/SfBottomNavigation/SfBottomNavigation.vue";

export default storiesOf("BottomNavigation", module).add("with icons", () => ({
  components: { SfBottomNavigation },
  template: "<sf-bottom-navigation></sf-bottom-navigation>"
}));
