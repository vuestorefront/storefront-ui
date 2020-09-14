import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options,
  boolean,
  object,
} from "@storybook/addon-knobs";
import { SfColor } from "@storefront-ui/vue";
storiesOf("Atoms|Color", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfColor },
    props: {
      color: { default: text("color", "red", "Props") },
      hasBadge: { default: boolean("hasBadge", true, "Props") },
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-color--rounded": "sf-color--rounded",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      button: {
        default: object(
          "button",
          {
            disabled: false,
          },
          "Props"
        ),
      },
    },
    data() {
      return {
        selected: true,
      };
    },
    template: `<SfColor 
          :color="color" 
          :selected="selected" 
          :has-badge="hasBadge"
          :button="button"
          :aria-label="color"  
          style="margin: 10px;"
          :class="customClass"
          @click="selected = !selected"/>`,
  }));
