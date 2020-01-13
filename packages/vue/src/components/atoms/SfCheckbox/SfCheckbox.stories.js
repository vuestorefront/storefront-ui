/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import SfCheckbox from "./SfCheckbox.vue";
storiesOf("Atoms|Checkbox", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfCheckbox },
    props: {
      name: {
        default: text("name", "shipping", "Props")
      },
      label: {
        default: text("label", "I want to create an account", "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      }
    },
    data() {
      return {
        checked: false
      };
    },
    template: `<SfCheckbox 
      v-model="checked"
      :name="name"      
      :label="label"
      :required="required"
      :disabled="disabled"
      />`
  }))
  .add("Multiple checkboxes", () => ({
    components: { SfCheckbox },
    data() {
      return {
        checked: []
      };
    },
    template: `<div>
        <SfCheckbox 
          v-model="checked"
          name="woman"
          value="woman"
          label="Woman"
        />
        <SfCheckbox 
          v-model="checked"
          name="man"
          value="man"
          label="Man"
        />
        <SfCheckbox 
          v-model="checked"
          name="children"
          value="children"
          label="Children"
        /> 
      </div>`
  }))
  .add("[slot] checkmark", () => ({
    components: { SfCheckbox },
    props: {
      name: {
        default: text("name", "shipping", "Props")
      },
      label: {
        default: text("label", "Copy address data from shipping", "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      }
    },
    data() {
      return {
        checked: false
      };
    },
    template: `<SfCheckbox 
      v-model="checked"
      :name="name"
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
        default: text("name", "shipping", "Props")
      },
      label: {
        default: text("label", "Copy address data from shipping", "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      }
    },
    data() {
      return {
        checked: false
      };
    },
    template: `<SfCheckbox 
      v-model="checked"
      :name="name"
      :label="label"
      :required="required"
      :disabled="disabled">
      <template #label="{label, isChecked, disabled}">
        <span v-if="isChecked" style="margin-left: 1rem">🎉 I'm checked</span>
        <span v-else style="margin-left: 1rem">👈 Please check me</span>
      </template>
    </SfCheckbox>`
  }));
