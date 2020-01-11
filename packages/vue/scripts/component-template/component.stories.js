/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import ComponentNameCamelCase from "./ComponentNameCamelCase.vue";

storiesOf("ComponentType|ComponentName", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "ComponentNameKebabCase--modifier":
              "ComponentNameKebabCase--modifier"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      }
    },
    editableProp: {
      default: text("propname (prop)", "propvalue")
    },
    components: { ComponentNameCamelCase },
    template: `<ComponentNameCamelCase
      :class="customClass" />`
  }));
