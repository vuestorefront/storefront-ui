import SelectBase from "../../components/Select/SelectBase.vue";

export default {
  title: "SFUI Components/Select",
  component: SelectBase,  
  parameters: { 
    docs: {
      description: {
        component:
          "The base select component. [link to component docs on the page]",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Value selected.",
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
      description: "Required field.",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description: "Disables select.",
    },
    invalid: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Shows error message value of form select when true.",
    },
  }
};

const Template = (args, { argTypes }) => ({
  components: { SelectBase },
  props: Object.keys(argTypes),
  template: `
    <SelectBase 
      :value="value"
      :disabled="disabled"   
      :invalid="invalid"   
    />`
});

export const Primary = Template.bind({});

const RequiredSelect = (args, { argTypes }) => ({
  components: { SelectBase },
  props: Object.keys(argTypes),
  template: `
    <SelectBase 
      :value="value"
      :disabled="disabled"   
      :invalid="invalid"  
      :required="required" 
    />`
});
export const Required = RequiredSelect.bind({});
Required.args = {
  ...Primary.args,
  required: true,
};

