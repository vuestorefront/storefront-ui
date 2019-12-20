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
  .add("Default", () => ({
    components: { SfProperty },
    props: {
      customClass: {
        default: options(
          "CSS modifier",
          {
            "sf-property--full-width": "sf-property--full-width"
          },
          "",
          { display: "multi-select" }
        )
      },
      name: {
        default: text("name (prop)", "Material")
      },
      value: {
        default: text("value (prop)", "Cotton")
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
          "CSS modifier",
          {
            "sf-property--full-width": "sf-property--full-width"
          },
          "",
          { display: "multi-select" }
        )
      },
      name: {
        default: text("name (prop)", "Material")
      },
      value: {
        default: text("value (prop)", "Cotton")
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
          "CSS modifier",
          {
            "sf-property--full-width": "sf-property--full-width"
          },
          "",
          { display: "multi-select" }
        )
      },
      name: {
        default: text("name (prop)", "Material")
      },
      value: {
        default: text("value (prop)", "Cotton")
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
