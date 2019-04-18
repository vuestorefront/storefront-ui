import { storiesOf } from "@storybook/vue";
import notes from "./README.md";
import SfCircleButton from "./SfCircleButton.vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

storiesOf("Atoms|CircleButton", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        icon: {
          default: text("icon (prop)", "assets/storybook/home.svg")
        },
        alt: {
          default: text("alt (prop)", "Home")
        },
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
      template: `<sf-circle-button :icon="icon" :alt="alt" :class="customClass" />`
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfCircleButton },
      template: `<sf-circle-button><img src='assets/storybook/menu.svg'></sf-circle-button>`
    }),
    {
      info: true,
      notes
    }
  );
