import SfRadio from '../../components/SfRadio/SfRadio.vue'
import SfRadioRight from '../../components/Sfradio/SfRadioRight.vue'

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
      name="radio"
      :disabled="true"
    />`
})

export const Disabled = DisabledRadio.bind({})

const RequiredRadio = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
    <SfRadio 
      name="radio"
      :required="true"
    />`
})

export const Required = RequiredRadio.bind({})

const RadioRight = (args, { argTypes }) => ({
  components: { SfRadioRight },
  props: Object.keys(argTypes),
  template: `
    <SfRadioRight name="radio" />`
})
export const Right = RadioRight.bind({})
