import RadioGroupBase from './RadioGroupBase/RadioGroupBase.vue';
import RadioGroupRight from './RadioGroupRight/RadioGroupRight.vue';
import RadioGroupTile from './RadioGroupTile/RadioGroupTile.vue';
import RadioGroupMultiline from './RadioGroupMultiline/RadioGroupMultiline.vue';

export default {
  title: 'SFUI Components/Radio',
  component: RadioGroupBase,
  parameters: {
    docs: {
      description: {
        component:
          'The base radio component. [link to component docs on the page]',
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      table: {
        category: 'Props',
      },
      defaultValue: 'radio-1',
      description: 'Radio identifier',
    },
    name: {
      control: 'text',
      table: {
        category: 'Props',
      },
      defaultValue: 'radio',
      description: 'Radio name',
    },
    value: {
      control: 'text',
      table: {
        category: 'Props',
        defaultValue: {
          summary: '',
        },
      },
      defaultValue: '',
      description: 'Value selected.',
    },
    selected: {
      control: 'text',
      table: {
        category: 'Props',
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '',
        },
      },
      defaultValue: '',
      description: 'Value of the selected option',
    },
    required: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: 'Required field.',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props',
      },
      description: 'Disables radio.',
    },
  },

};

const Template = (args, { argTypes }) => ({
  components: { RadioGroupBase },
  props: Object.keys(argTypes),
  template: `
  <RadioGroupBase
    :disabled="disabled"
    :required="required"
    :selected="selected"
  />`,
});

export const Base = Template.bind({});

Base.args = {
  selected: 'one',
};

const RadioRight = (args, { argTypes }) => ({
  components: { RadioGroupRight },
  props: Object.keys(argTypes),
  template: `
  <RadioGroupRight
    :disabled="disabled"
    :required="required"
    :selected="selected"
  />`,
});
export const Right = RadioRight.bind({});

const RadioTile = (args, { argTypes }) => ({
  components: { RadioGroupTile },
  props: Object.keys(argTypes),
  template: `
  <RadioGroupTile
    :disabled="disabled"
    :required="required"
    :selected="selected"
  />`,
});
export const Tile = RadioTile.bind({});

Tile.args = {
  selected: 'two',
};

const RadioMultiline = (args, { argTypes }) => ({
  components: { RadioGroupMultiline },
  props: Object.keys(argTypes),
  template: `
  <RadioGroupMultiline
    :disabled="disabled"
    :required="required"
    :selected="selected"
  />`,
});

export const Multiline = RadioMultiline.bind({});
