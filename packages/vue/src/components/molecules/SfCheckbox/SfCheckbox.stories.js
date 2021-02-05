import { SfCheckbox } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Checkbox",
  component: SfCheckbox,
  argTypes: {
    name: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    value: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    label: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    hintMessage: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    required: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    infoMessage: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    errorMessage: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    valid: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    selected: {
      control: "array",
      table: {
        category: "Props",
      },
    },
    change: { action: "Selected items changed", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
  <SfCheckbox 
    v-model="selected"
    :name="name"      
    :label="label"
    :hintMessage="hintMessage"
    :required="required"
    :error-message="errorMessage"
    :valid="valid"
    :infoMessage="infoMessage"
    :disabled="disabled"
    @change="change"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  name: "shipping",
  label: "I want to create an account",
};

export const Selected = Template.bind({});
Selected.args = {
  ...Common.args,
  selected: true,
};

export const Required = Template.bind({});
Required.args = {
  ...Common.args,
  required: true,
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  ...Common.args,
  infoMessage: "This is an info message",
};

export const WithCustomError = Template.bind({});
WithCustomError.args = {
  ...Common.args,
  errorMessage: "Something is wrong",
  valid: false,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Common.args,
  valid: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Common.args,
  disabled: true,
};

export const UseCheckmarkSlot = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
  <SfCheckbox 
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
});
UseCheckmarkSlot.args = {
  ...Common.args,
  checked: true,
};

export const UseErrorMessageSlot = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
  <SfCheckbox 
    v-model="selected"
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
});
UseErrorMessageSlot.args = { ...Invalid.args };
