import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { SfCheckbox } from "@storefront-ui/vue";
storiesOf("Molecules|Checkbox", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfCheckbox },
    props: {
      name: {
        default: text("name", "shipping", "Props"),
      },
      label: {
        default: text("label", "I want to create an account", "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", false, "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `<SfCheckbox 
      v-model="checked"
      :name="name"      
      :label="label"
      :hintMessage="hintMessage"
      :required="required"
      :error-message="errorMessage"
      :valid="valid"
      :infoMessage="infoMessage"
      :disabled="disabled"
      />`,
  }))
  .add("Multiple checkboxes", () => ({
    components: { SfCheckbox },
    data() {
      return {
        checked: [],
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
      </div>`,
  }))
  .add("[slot] checkmark", () => ({
    components: { SfCheckbox },
    props: {
      name: {
        default: text("name", "shipping", "Props"),
      },
      label: {
        default: text("label", "Copy address data from shipping", "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", false, "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `<SfCheckbox 
      v-model="checked"
      :name="name"
      :label="label"
      :hintMessage="hintMessage"
      :required="required"
      :error-message="errorMessage"
      :valid="valid"
      :infoMessage="infoMessage"
      :disabled="disabled">
      <template #checkmark="{isChecked, disabled}">
        <span v-if="isChecked">👍🏻</span>
        <span v-else>👎🏻</span>
      </template>
    </SfCheckbox>`,
  }))
  .add("[slot] label", () => ({
    components: { SfCheckbox },
    props: {
      name: {
        default: text("name", "shipping", "Props"),
      },
      label: {
        default: text("label", "Copy address data from shipping", "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", false, "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", true, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `<SfCheckbox 
      v-model="checked"
      :name="name"
      :label="label"
     :hintMessage="hintMessage"
      :required="required"
      :error-message="errorMessage"
      :valid="valid"
      :infoMessage="infoMessage"
      :disabled="disabled">
      <template #label="{label, isChecked, disabled}">
        <span v-if="isChecked" style="margin-left: 1rem">🎉 I'm checked</span>
        <span v-else style="margin-left: 1rem">👈 Please check me</span>
      </template>
    </SfCheckbox>`,
  }))
  .add("[slot] error-message", () => ({
    components: { SfCheckbox },
    props: {
      name: {
        default: text("name", "shipping", "Props"),
      },
      label: {
        default: text("label", "I want to create an account", "Props"),
      },
      hintMessage: {
        default: text("hintMessage", "Required", "Props"),
      },
      required: {
        default: boolean("required", false, "Props"),
      },
      errorMessage: {
        default: text("errorMessage", "Something is wrong", "Props"),
      },
      valid: {
        default: boolean("valid", false, "Props"),
      },
      infoMessage: {
        default: text("infoMessage", "", "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
    },
    data() {
      return {
        checked: false,
      };
    },
    template: `<SfCheckbox 
      v-model="checked"
      :name="name"      
      :label="label"
      :hint-message="hintMessage"
      :required="required"
      :error-message="errorMessage"
      :valid="valid"
      :info-message="infoMessage"
      :disabled="disabled"
      >
        <template #show-error-message="{ errorMessage }">
          <span> CUSTOM ERROR MESSAGE 👈</span>
        </template>
      </SfCheckbox>`,
  }));
