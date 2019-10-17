// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import SfCheckbox from "./SfCheckbox.vue";

storiesOf("Atoms|Checkbox", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfCheckbox },
    props: {
      name: {
        default: text("(prop) name", "shipping")
      },
      value: {
        default: text("(prop) value", "shipping-address")
      },
      label: {
        default: text("(prop) label", "Copy address data from shipping")
      },
      required: {
        default: boolean("(prop) required", false)
      },
      disabled: {
        default: boolean("(prop) disabled", false)
      }
    },
    data() {
      return {
        checked: []
      };
    },
    template: `<SfCheckbox 
        v-model="checked"
        :name="name"
        :value="value"
        :label="label"
        :required="required"
        :disabled="disabled"
      />`
  }))
  .add("[slot] checkmark", () => ({
    components: { SfCheckbox },
    props: {
      name: {
        default: text("(prop) name", "shipping")
      },
      value: {
        default: text("(prop) value", "shipping-address")
      },
      label: {
        default: text("(prop) label", "Copy address data from shipping")
      },
      required: {
        default: boolean("(prop) required", false)
      },
      disabled: {
        default: boolean("(prop) disabled", false)
      }
    },
    data() {
      return {
        checked: []
      };
    },
    template: `<SfCheckbox 
        v-model="checked"
        :name="name"
        :value="value"
        :label="label"
        :required="required"
        :disabled="disabled">
        <template #checkmark>
          <span></span>
        </template>
      </SfCheckbox>`
  }))
  .add("[slot] label", () => ({
    components: { SfCheckbox },
    props: {
      name: {
        default: text("name (prop)", "shipping")
      },
      value: {
        default: text("value (prop)", "shipping-address")
      },
      label: {
        default: text("label (prop)", "Copy address data from shipping")
      },
      required: {
        default: boolean("required (prop)", false)
      },
      disabled: {
        default: boolean("disabled (prop)", false)
      }
    },
    data() {
      return {
        checked: []
      };
    },
    template: `<SfCheckbox 
        v-model="checked"
        :name="name"
        :value="value"
        :label="label"
        :required="required"
        :disabled="disabled">
        <template #label>
          <span></span>
        </template>
      </SfCheckbox>`
  }));
