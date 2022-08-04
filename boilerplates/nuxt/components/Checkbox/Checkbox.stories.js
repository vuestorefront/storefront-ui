import CheckboxBase from './CheckboxBase.vue';

export default {
  title: 'SFUI Components/Checkbox',
  component: CheckboxBase,
  parameters: {
    docs: {
      description: {
        component:
          'The checkbox component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    required: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: false
        }
      },
      defaultValue: false,
      description: 'Required field'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description: 'Disables checkbox'
    },
    indeterminate: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: false
        }
      },
      defaultValue: false,
      description: 'Indeterminate state for checkbox'
    },
    invalid: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description: 'Invalid state'
    },
    label: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Checkbox label'
    },
    helpText: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Help text that can be visible below checkbox'
    },
    errorText: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Text that displays below invalid checkbox'
    },
    rightCheckbox: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description: 'If true description is on the left and checkbox is on the right.'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { CheckboxBase },
  props: Object.keys(argTypes),
  template: `
    <CheckboxBase
      name="checkbox"
      :label="label"
      :help-text="helpText"
      :error-text="errorText"
      :disabled="disabled"
      :required="required"
      :indeterminate="indeterminate"
      :invalid="invalid"
      :rightCheckbox="rightCheckbox"
    />`
});

export const Base = Template.bind({});

Base.args = {
  invalid: false,
  label: 'Label',
  helpText: 'Help text',
  errorText: 'error text'
};
