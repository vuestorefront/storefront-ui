import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";
import SfBottomNavigation from "./SfBottomNavigation.vue";

export default storiesOf("BottomNavigation", module)
  .addDecorator(withKnobs)
  .add("with icons", () => ({
    components: { SfBottomNavigation },
    props: {
      image: {
        default: text("image (prop)", "/added_to_cart.svg")
      }
    },
    template: `
      <SfBottomNavigation
        :image="icon"
      />
    `
  }));
