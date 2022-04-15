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
}

const Template = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
    <SfCheckbox name="checkbox" />`
})

export const Common = Template.bind({})

const CheckboxRight = (args, { argTypes }) => ({
  components: { SfCheckboxRight },
  props: Object.keys(argTypes),
  template: `
    <SfCheckboxRight name="checkbox" />`
})
export const Right = CheckboxRight.bind({})

const RequiredCheckbox = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
    <SfCheckbox name="checkbox" :required="true" />`
})
export const Required = RequiredCheckbox.bind({})

const IndeterminateCheckbox = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
    <SfCheckbox name="checkbox" :indeterminate="true" />`
})
export const Indeterminate = IndeterminateCheckbox.bind({})

const DisabledButton = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
    <SfCheckbox name="checkbox" :disabled="true" />`
})
export const Disabled = DisabledButton.bind({})

const InvalidCheckbox = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
    <SfCheckbox name="checkbox" :required="true" />`
})
export const Invalid = InvalidCheckbox.bind({})
