/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import SfCheckbox from "./SfCheckbox.vue";

storiesOf("Atoms|Checkbox", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
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
      :disabled="disabled"
      />`
  }))
  .add("[slot] checkmark", () => ({
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
      <template #checkmark="{isChecked, disabled}">
        <span v-if="isChecked">👍🏻</span>
        <span v-else>👎🏻</span>
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
      <template #label="{label, isChecked, disabled}">
        <span v-if="isChecked" style="margin-left: 1rem">🎉 I'm checked</span>
        <span v-else style="margin-left: 1rem">👈 Please check me</span>
      </template>
    </SfCheckbox>`
  }));
