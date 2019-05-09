import { storiesOf } from "@storybook/vue";
import notes from "./README.md";
import SfCircleIcon from "./SfCircleIcon.vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

storiesOf("Atoms|CircleIcon", module)
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
            ["null", "sf-circle-icon--small", "sf-circle-icon--secondary"],
            "null"
          )
        }
      },
      components: { SfCircleIcon },
      template: `<sf-circle-icon :icon="icon" :alt="alt" :class="customClass" />`
    }),
    {
      info: {
        summary: "Rounded button with icon as content."
      },
      notes
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: { SfCircleIcon },
      template: `<sf-circle-icon><img src='assets/storybook/menu.svg'></sf-circle-icon>`
    }),
    {
      info: {
        summary:
          "Use this slot if passing image source is not enough for you (e.g. you want to inline SVG icon). Slot content will replace the default icon."
      },
      notes
    }
  );
