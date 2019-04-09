import { storiesOf } from "@storybook/vue";
import SfCircleButton from "./SfCircleButton.vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default storiesOf("CircleButton", module)
  .addDecorator(withKnobs)
  .add("Props", () => ({
    props: {
      icon: {
        default: text("icon (prop)", "assets/storybook/home.svg")
      },
      alt: {
        default: text("alt (prop)", "Home")
      }
    },
    components: { SfCircleButton },
    template: "<sf-circle-button :icon='icon' :alt='alt'/>"
  }))
  .add("CSS Modifiers", () => ({
    props: {
      customClass: {
        default: select(
          "CSS Modifier",
          ["null", "sf-circle-button--small", "sf-circle-button--secondary"],
          "null",
          "CSS-Modifiers"
        )
      }
    },
    components: { SfCircleButton },
    template:
      "<sf-circle-button icon='assets/storybook/home.svg' :class='customClass'/>>"
  }))
  .add("[slot] default", () => ({
    components: { SfCircleButton },
    template: `<sf-circle-button><img src='assets/storybook/menu.svg'></sf-circle-button>`
  }));
