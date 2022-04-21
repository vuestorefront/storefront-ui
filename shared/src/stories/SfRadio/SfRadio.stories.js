import SfRadio from '../../components/SfRadio/SfRadio.vue'
import SfRadioRight from '../../components/SfRadio/SfRadioRight.vue'

export default {
  title: 'SFUI Components/Radio',
  component: SfRadio,
  parameters: {
    docs: {
      description: {
        component:
          'The base radio component. [link to component docs on the page]'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
    <SfRadio name="radio" />`
})

export const Common = Template.bind({})

const DisabledRadio = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
    <SfRadio 
      name="radio-1"
      :disabled="true"
    />`
})

export const Disabled = DisabledRadio.bind({})

const RequiredRadio = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
    <SfRadio 
      name="radio-2"
      :required="true"
    />`
})

export const Required = RequiredRadio.bind({})

const InvalidRadio = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
    <SfRadio 
      name="radio-2"
      :invalid="true"
    />`
})

export const Invalid = InvalidRadio.bind({})


const RadioRight = (args, { argTypes }) => ({
  components: { SfRadioRight },
  props: Object.keys(argTypes),
  template: `
    <SfRadioRight name="radio-right" />`
})
export const Right = RadioRight.bind({})


const DisabledRadioRight = (args, { argTypes }) => ({
  components: { SfRadioRight },
  props: Object.keys(argTypes),
  template: `
    <SfRadioRight 
      name="radio-right-1"
      :disabled="true"
    />`
})

export const Disabled_Right = DisabledRadioRight.bind({})

const RequiredRadioRight = (args, { argTypes }) => ({
  components: { SfRadioRight },
  props: Object.keys(argTypes),
  template: `
    <SfRadioRight 
      name="radio-right-2"
      :required="true"
    />`
})

export const Required_Right = RequiredRadioRight.bind({})
