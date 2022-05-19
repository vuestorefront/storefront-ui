import RadioGroupBase from '../../components/Radio/RadioGroupBase.vue';
import RadioGroupRight from '../../components/Radio/RadioGroupRight.vue';
import RadioGroupTile from '../../components/Radio/RadioGroupTile.vue';
import RadioGroupMultiline from '../../components/Radio/RadioGroupMultiline.vue';
import RadioGroupDense from '../../components/Radio/RadioGroupDense.vue';

export default {
  title: 'SFUI Components/Radio',
  component: RadioGroupBase,
  parameters: {
    docs: {
      description: {
        component:
          'The base radio component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: 'radio-1',
      description: 'Radio identifier'
    },
    name: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: 'radio',
      description: 'Radio name'
    },
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
    selected: {
      control: 'text',
      table: {
        category: 'Props',
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: ''
        }
      },
      defaultValue: '',
      description: 'Value of the selected option'
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
      description: 'Disables radio.'
    },
    invalid: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: false
        }
      },
      defaultValue: true,
      description: 'Shows error message value of radio group when true.'
    }
  }

};

const Template = (args, { argTypes }) => ({
  components: { RadioGroupBase },
  props: Object.keys(argTypes),
  template: `
  <RadioGroupBase 
    :disabled="disabled"   
    :required="required"  
  />`
});

export const Common = Template.bind({});

const RadioRight = (args, { argTypes }) => ({
  components: { RadioGroupRight },
  props: Object.keys(argTypes),
  template: `
  <RadioGroupRight
    :disabled="disabled"   
    :required="required"  
  />`
});
export const Right = RadioRight.bind({});

const RadioTile = (args, { argTypes }) => ({
  components: { RadioGroupTile },
  props: Object.keys(argTypes),
  template: `
  <RadioGroupTile 
    :disabled="disabled"   
    :required="required"  
  />`
});
export const Tile = RadioTile.bind({});

const RadioMultiline = (args, { argTypes }) => ({
  components: { RadioGroupMultiline },
  props: Object.keys(argTypes),
  template: `
  <RadioGroupMultiline
    :disabled="disabled"   
    :required="required"  
  />`
});

export const Multiline = RadioMultiline.bind({});

const RadioDense = (args, { argTypes }) => ({
  components: { RadioGroupDense },
  props: Object.keys(argTypes),
  template: `
  <RadioGroupDense 
    :disabled="disabled"   
    :required="required"  
  />`
});

export const Dense = RadioDense.bind({});
