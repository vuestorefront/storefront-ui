
import ComboBox from './ComboBox.vue';

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
    },
    value: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Combo box value'
    },
    labelOutside: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: false
        }
      },
      defaultValue: false,
      description: 'Move label position over the input field.'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { ComboBox },
  props: Object.keys(argTypes),
  methods: {
    delayOptionsLoad() {
      setTimeout(() => this.delayedColors = colors, 5000);
    },
    filterOptions(comboboxValue) {
      return this.delayedColors.filter(el => el.toLowerCase().includes(comboboxValue.toLowerCase()));
    }
  },
  mounted() {
    this.delayOptionsLoad();
  },
  data() {
    return {
      delayedColors: [],
      inputValue: this.value
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
      :value="inputValue"
      :filtered-options="filterOptions(inputValue)"
      :labelOutside="labelOutside"
      @change="(val) => inputValue = val"
      @selected="(val) => inputValue = val"
    />
   `
});

export const Base = Template.bind({});

Base.args = {
  label: 'Label',
  helpText: 'Help text',
  errorText: 'error text'
};
