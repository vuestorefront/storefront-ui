import { SfComponentSelect, SfProductOption } from "@storefront-ui/vue";
const optionsList = [
  { value: "amaranth", color: "#E52B50", label: "Amaranth" },
  { value: "amber", color: "#FFBF00", label: "Amber" },
  { value: "arctic-lime", color: "#D0FF14", label: "Arctic lime" },
  { value: "bluetiful", color: "#3C69E7", label: "Bluetiful" },
  { value: "buff", color: "#F0DC82", label: "Buff" },
];

export default {
  title: "Components/Molecules/ComponentSelect",
  component: SfComponentSelect,
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-component-select--underlined",
          "sf-component-select--no-chevron",
        ],
      },
    },
    label: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    selected: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    size: {
      control: "number",
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
    errorMessage: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    persistent: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfComponentSelect, SfProductOption },
  props: Object.keys(argTypes),
  template: `
  <SfComponentSelect
    v-model="selected"
    :class="classes"
    :label="label"
    :size="size"
    :required="required"
    :valid="valid"
    :disabled="disabled"
    :error-message="errorMessage"
    :persistent="persistent"
    style="max-width: 30rem"
  >
    <SfComponentSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
      <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
    </SfComponentSelectOption>
  </SfComponentSelect>`,
});

export const Common = Template.bind({});
Common.args = {
  label: "Color",
  options: optionsList,
};

export const Required = Template.bind({});
Required.args = {
  ...Common.args,
  required: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Common.args,
  valid: false,
  selected: optionsList[0].value,
};

export const Persistent = Template.bind({});
Persistent.args = {
  ...Common.args,
  persistent: true,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Common.args,
  selected: optionsList[0].value,
};

export const WithUnderlined = Template.bind({});
WithUnderlined.args = {
  ...Common.args,
  classes: "sf-component-select--underlined",
};

export const NoChevron = Template.bind({});
NoChevron.args = {
  ...Common.args,
  classes: "sf-component-select--no-chevron",
};

export const LongOptionsList = Template.bind({});
LongOptionsList.args = {
  ...Common.args,
  size: 3,
};

export const UseLabelSlot = (args, { argTypes }) => ({
  components: { SfComponentSelect, SfProductOption },
  props: Object.keys(argTypes),
  template: `
  <SfComponentSelect
    v-model="selected"
    :class="classes"
    :label="label"
    :size="size"
    :required="required"
    :valid="valid"
    :disabled="disabled"
    :error-message="errorMessage" 
    :persistent="persistent"       
    >
    <SfComponentSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
      <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
    </SfComponentSelectOption>
    <template #label>
      CUSTOM LABEL
    </template>
  </SfComponentSelect>`,
});
UseLabelSlot.args = { ...Common.args };
UseLabelSlot.decorators = [
  () => ({ template: '<div style="max-width: 20rem;"><story /></div>' }),
];

export const UseErrorMessageSlot = (args, { argTypes }) => ({
  components: { SfComponentSelect, SfProductOption },
  props: Object.keys(argTypes),
  template: `
  <SfComponentSelect
    v-model="selected"
    :class="classes"
    :label="label"
    :size="size"
    :required="required"
    :valid="valid"
    :disabled="disabled"
    :error-message="errorMessage"
    :persistent="persistent"
    >
    <SfComponentSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
      <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
    </SfComponentSelectOption>
    <template #errorMessage>
      CUSTOM ERROR MESSAGE
    </template>
  </SfComponentSelect>`,
});
UseErrorMessageSlot.args = { ...Common.args };
UseErrorMessageSlot.decorators = [...UseLabelSlot.decorators];

export const UseCancelSlot = (args, { argTypes }) => ({
  components: { SfComponentSelect, SfProductOption },
  props: Object.keys(argTypes),
  template: `
  <SfComponentSelect
    v-model="selected"
    :class="classes"
    :label="label"
    :size="size"
    :required="required"
    :valid="valid"
    :disabled="disabled"
    :error-message="errorMessage"
    :persistent="persistent"
    >
    <SfComponentSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
      <SfProductOption :color="option.color" :label="option.label"></SfProductOption>
    </SfComponentSelectOption>
    <template #cancel>
      CUSTOM CANCEL BUTTON
    </template>
  </SfComponentSelect>`,
});

UseCancelSlot.args = { ...Common.args };
UseCancelSlot.decorators = [...UseLabelSlot.decorators];
