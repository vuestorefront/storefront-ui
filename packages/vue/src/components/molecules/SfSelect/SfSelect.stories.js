import { SfSelect } from "@storefront-ui/vue";

const options = [
  { value: "" },
  { value: "amaranth", color: "#E52B50", label: "Amaranth" },
  { value: "amber", color: "#FFBF00", label: "Amber" },
  { value: "arctic-lime", color: "#D0FF14", label: "Arctic lime" },
  { value: "bluetiful", color: "#3C69E7", label: "Bluetiful" },
  { value: "buff", color: "#F0DC82", label: "Buff" },
];

export default {
  title: "Components/Molecules/Select",
  component: SfSelect,
  parameters: {
    docs: {
      description: {
        component: "Native select component.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-select--underlined", ""],
      },
      table: {
        category: "CSS Modifiers",
        defaultValue: {
          summary: "",
        },
      },
      description: "CSS classes to modify component styling",
    },
    label: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Select field label",
    },
    value: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Value selected",
    },
    placeholder: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Placeholder",
    },
    errorMessage: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "This field is not correct.",
        },
      },
      defaultValue: "This field is not correct.",
      description:
        "Error message value of form select. It will be appeared if `valid` is `true`.",
    },
    required: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Required field?",
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Disabled status of form select",
    },
    valid: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: true,
        },
      },
      defaultValue: true,
      description: "Validate value of form select",
    },
    input: { action: "Selected", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSelect },
  props: Object.keys(argTypes),
  data() {
    return {
      options,
      selectedValue: "",
    };
  },
  template: `
  <SfSelect
    v-model="selectedValue"
    :class="classes"
    :label="label"
    :required="required"
    :valid="valid"
    :disabled="disabled"
    :error-message="errorMessage"
    :placeholder="placeholder"       
    @input="input"
    style="max-width: 30rem; margin: 10px;"
  >
    <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
      {{option.label}}
    </SfSelectOption>
  </SfSelect>`,
});

export const Common = Template.bind({});
Common.args = {
  label: "Color",
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Common.args,
  valid: false,
};

export const Required = Template.bind({});
Required.args = {
  ...Common.args,
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Common.args,
  disabled: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Common.args,
  placeholder: "Select something",
};

export const Underlined = Template.bind({});
Underlined.args = {
  ...Common.args,
  classes: "sf-select--underlined",
};

export const HasSelectedValue = Template.bind({});
HasSelectedValue.args = {
  ...Common.args,
  value: "amber",
};

export const UseLabelSlot = (args, { argTypes }) => ({
  components: { SfSelect },
  props: Object.keys(argTypes),
  data() {
    return {
      options,
      selectedValue: "",
    };
  },
  template: `
  <SfSelect
    v-model="selectedValue"
    :class="classes"
    :label="label"
    :required="required"
    :valid="valid"
    :disabled="disabled"
    :error-message="errorMessage"
    :placeholder="placeholder"       
    @input="input"
    style="max-width: 30rem; margin: 10px;"
  >
    <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
      {{option.label}}
    </SfSelectOption>
    <template #label>
      CUSTOM LABEL
    </template>
  </SfSelect>`,
});
UseLabelSlot.args = { ...Common.args };
