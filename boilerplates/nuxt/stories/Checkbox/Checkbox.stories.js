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
    valid: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description: ''
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { CheckboxBase },
  props: Object.keys(argTypes),
  template: `
    <CheckboxBase name="checkbox" :disabled="disabled" :required="required" :indeterminate="indeterminate" :valid="valid" />`
});

export const Base = Template.bind({});

const CheckboxOnRight = (args, { argTypes }) => ({
  components: { CheckboxRight },
  props: Object.keys(argTypes),
  template: `
    <CheckboxRight name="checkbox" :disabled="disabled" :required="required" :indeterminate="indeterminate" :valid="valid" />`
});
export const Right = CheckboxOnRight.bind({});
