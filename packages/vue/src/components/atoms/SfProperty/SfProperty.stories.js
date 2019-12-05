/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfProperty from "./SfProperty.vue";
import SfBadge from "../SfBadge/SfBadge.vue";

storiesOf("Atoms|Property", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfProperty },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-property--full-width": "sf-property--full-width"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      name: {
        default: text("name", "Material", "Props")
      },
      value: {
        default: text("value", "Cotton", "Props")
      }
    },
    template: `<SfProperty
        :class="customClass"
        :name="name"
        :value="value" />`
  }))
  .add("[slot] name", () => ({
    components: { SfProperty },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-property--full-width": "sf-property--full-width"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      name: {
        default: text("name", "Material", "Props")
      },
      value: {
        default: text("value", "Cotton", "Props")
      }
    },
    template: `<SfProperty
      :class="customClass"
      :name="name"
      :value="value">
      <template #name="{name}">
        {{name}}:<br>
      </template>
    </SfProperty>`
  }))
  .add("[slot] value", () => ({
    components: {
      SfProperty,
      SfBadge
    },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-property--full-width": "sf-property--full-width"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      name: {
        default: text("name", "Material", "Props")
      },
      value: {
        default: text("value", "Cotton", "Props")
      }
    },
    template: `<SfProperty
      :class="customClass"
      :name="name"
      :value="value">
      <template #value="{value}">
        <SfBadge>{{value}}</SfBadge>
      </template>
    </SfProperty>`
  }));
