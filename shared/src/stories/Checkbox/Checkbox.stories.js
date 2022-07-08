import CheckboxBase from '../../components/Checkbox/CheckboxBase.vue';
import CheckboxRight from '../../components/Checkbox/CheckboxRight.vue';

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
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { CheckboxBase },
  props: Object.keys(argTypes),
  template: `
    <CheckboxBase name="checkbox" :label="label" :help-text="helpText" :error-text="errorText" :disabled="disabled" :required="required" :indeterminate="indeterminate" :invalid="invalid" />`
});

export const Base = Template.bind({});

Base.args = {
  invalid: false,
  label: 'Label',
  helpText: 'Help text',
  errorText: 'error text'
};

const CheckboxOnRight = (args, { argTypes }) => ({
  components: { CheckboxRight },
  props: Object.keys(argTypes),
  template: `
    <CheckboxRight name="checkbox" :label="label" :help-text="helpText" :error-text="errorText" :disabled="disabled" :required="required" :indeterminate="indeterminate" :invalid="invalid" />`
});
export const Right = CheckboxOnRight.bind({});

Right.args = {
  ...Base.args
};
