import SfCheckbox from '../../components/SfCheckbox/SfCheckbox.vue'
import SfCheckboxRight from '../../components/SfCheckbox/SfCheckboxRight.vue'

export default {
  title: 'SFUI Components/Checkbox',
  component: SfCheckbox,
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
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Required field",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description: "Disables checkbox",
    },
    indeterminate: {
      control: "boolean",
      table: {
        category: "Props",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Indeterminate state for checkbox",
    },
    valid: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description: "",
    },
  }
}

const Template = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
    <SfCheckbox name="checkbox" :disabled="disabled" :required="required" :indeterminate="indeterminate" :valid="valid" />`
})

export const Common = Template.bind({})

const CheckboxRight = (args, { argTypes }) => ({
  components: { SfCheckboxRight },
  props: Object.keys(argTypes),
  template: `
    <SfCheckboxRight name="checkbox" :disabled="disabled" :required="required" :indeterminate="indeterminate" :valid="valid" />`
})
export const Right = CheckboxRight.bind({})
