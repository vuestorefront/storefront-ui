
import ComboBox from '../../components/ComboBox/ComboBox.vue';
import ComboBoxLabelOutside from '../../components/ComboBox/ComboBoxLabelOutside.vue';
import ComboBoxWithoutLabel from '../../components/ComboBox/ComboBoxWithoutLabel.vue';

const colors = [
  'red',
  'red-orange',
  'orange',
  'yellow',
  'yellow-green',
  'green',
  'sky blue',
  'blue',
  'violet',
  'brown',
  'black',
  'white',
  'gray',
  'magenta',
  'pink',
  'light-blue',
  'aqua-green',
  'jade-green',
  'peach',
  'golden-yellow',
  'yellow-orange',
  'mahogany',
  'tan',
  'light brown'
];

export default {
  title: 'SFUI Components/ComboBox',
  component: ComboBox,
  parameters: {
    docs: {
      description: {
        component:
          'The combo box component. [link to component docs on the page]'
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
      description: 'Required field.'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description: 'Disables combo box.'
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
      description: 'Shows error message when invalid.'
    },
    placeholder: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props',
        defaultValue: {
          summary: ''
        }
      },
      description: 'Combo box placeholder'
    },
    label: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Combo box label'
    },
    helpText: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Help text that can be visible below combo box'
    },
    errorText: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Text that displays below invalid combo box'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { ComboBox },
  props: Object.keys(argTypes),
  methods: {
    delayOptionsLoad() {
      setTimeout(() => this.delayedColors = colors, 5000);
    }
  },
  mounted() {
    this.delayOptionsLoad();
  },
  data() {
    return {
      delayedColors: []
    };
  },
  template: `
    <ComboBox 
      :options="delayedColors" 
      :required="required"
      :disabled="disabled"
      :invalid="invalid"
      :placeholder="placeholder"
      :label="label"
      :help-text="helpText"
      :error-text="errorText"
    />
   `
});

export const Base = Template.bind({});

Base.args = {
  label: 'Label',
  helpText: 'Help text',
  errorText: 'error text'
};

export const WithPlaceholder = (args, { argTypes }) => ({
  components: { ComboBox },
  props: Object.keys(argTypes),
  template: `
  <ComboBox 
    :options="colors" 
    :required="required"
    :disabled="disabled"
    :invalid="invalid"
    :placeholder="placeholder"
    :label="label"
    :help-text="helpText"
    :error-text="errorText"
  />`
});

WithPlaceholder.args = {
  ...Base.args,
  placeholder: 'Placeholder text',
  colors
};

export const LabelOutside = (args, { argTypes }) => ({
  components: { ComboBoxLabelOutside },
  props: Object.keys(argTypes),
  template: `
  <ComboBoxLabelOutside
    :options="colors" 
    :required="required"
    :disabled="disabled"
    :invalid="invalid"
    :placeholder="placeholder"
    :label="label"
    :help-text="helpText"
    :error-text="errorText"
    class="mt-3"
  />`
});

LabelOutside.args = {
  ...Base.args,
  colors
};

export const WithoutLabel = (args, { argTypes }) => ({
  components: { ComboBoxWithoutLabel },
  props: Object.keys(argTypes),
  template: `
  <ComboBoxWithoutLabel
    :options="colors" 
    :required="required"
    :disabled="disabled"
    :invalid="invalid"
    :placeholder="placeholder"
    :label="label"
    :help-text="helpText"
    :error-text="errorText"
  />`
});

WithoutLabel.args = {
  ...Base.args,
  colors
};
