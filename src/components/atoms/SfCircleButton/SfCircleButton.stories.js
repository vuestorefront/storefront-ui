import { storiesOf } from "@storybook/vue";
import SfCircleButton from "./SfCircleButton.vue";

export default storiesOf("CircleButton", module)
  .add("empty", () => ({
    components: { SfCircleButton },
    template: "<sf-circle-button></sf-circle-button>"
  }))
  .add("with icon prop", () => ({
    components: { SfCircleButton },
    template: "<sf-circle-button icon='/added_to_cart.svg'/>"
  }))
  .add("with different size and icon", () => ({
    components: { SfCircleButton },
    template: "<sf-circle-button icon='/close.svg'/>>"
  }))
  .add("width modifier sf-circle-button--secondary", () => ({
    components: { SfCircleButton },
    template:
      "<sf-circle-button class='sf-circle-button--secondary' icon='/added_to_cart.svg'/>"
  }));
