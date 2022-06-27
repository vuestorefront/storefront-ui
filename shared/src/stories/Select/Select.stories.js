import SelectBase from '../../components/Select/SelectBase.vue';

export default {
  title: 'SFUI Components/Select',
  component: SelectBase,
  parameters: {
    docs: {
      description: {
        component:
          'The base select component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    value: {
      control: 'text',
      table: {
        category: 'Props',
        defaultValue: {
          summary: ''
        }
      },
      defaultValue: '',
      description: 'Value selected.'
    },
    required: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: false
        }
      },
      defaultValue: false,
      description: 'Required field.'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description: 'Disables select.'
    },
    invalid: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: false
        }
      },
      defaultValue: false,
      description: 'Shows error message value of form select when true.'
    },
    options: {
      control: 'object',
      defaultValue: [],
      description: 'Array of strings'
    },
    label: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Select label'
    },
    helpText: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Help text that can be visible below select'
    },
    errorText: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Text that displays below invalid select'
    }
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
      :options="options"
      :label="label"
      :help-text="helpText"
      :error-text="errorText"
    />`
});

export const Base = Template.bind({});

Base.args = {
  options: [
    'option 1',
    'option 2',
    'option 3'
  ],
  invalid: false,
  label: 'Label',
  helpText: 'Help text',
  errorText: 'error text'
};
