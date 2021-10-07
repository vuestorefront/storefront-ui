import { SfTextarea } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Textarea",
  component: SfTextarea,
  parameters: {
    docs: {
      description: {
        component:
          "The multi-line text input control. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      defaultValue: "",
      table: {
        category: "Props",
      },
    },
    label: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
      },
    },
    name: {
      control: "text",
      table: {
        category: "Props",
      },
    },
    cols: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    rows: {
      control: "number",
      table: {
        category: "Props",
      },
    },
    minlength: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
    },
    maxlength: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
    },
    wrap: {
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
      defaultValue: true,
      table: {
        category: "Props",
      },
    },
    required: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
    },
    placeholder: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
    },
    readonly: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
    },
    change: { action: "Text area changed", table: { category: "Events" } },
    click: { action: "Text area focus", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfTextarea },
  props: Object.keys(argTypes),
  data() {
    return {
      textArea: this.value,
    };
  },
  template: `
  <SfTextarea
    v-model="textArea"
    :cols="cols"
    :rows="rows"
    :minlength="minlength"
    :maxlength="maxlength"
    :label="label"
    :name="name"
    :wrap="wrap"
    :valid="valid"
    :error-message="errorMessage"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    @click="click"
    @change="change"
  />`,
});

export const Common = Template.bind({});

Common.args = {
  label: "First name",
  name: "first-name",
  cols: 40,
  rows: 10,
  wrap: "soft",
  errorMessage: "Required",
};
