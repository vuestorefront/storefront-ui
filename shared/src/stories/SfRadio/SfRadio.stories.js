import SfRadio from '../../components/SfRadio/SfRadio.vue'
import SfRadioRight from '../../components/SfRadio/SfRadioRight.vue'
import SfRadioTile from '../../components/SfRadio/SfRadioTile.vue'
import SfRadioMultiline from '../../components/SfRadio/SfRadioMultiline.vue'
import SfRadioDense from '../../components/SfRadio/SfRadioDense.vue'
import SfRadioGroup from '../../components/SfRadio/SfRadioGroup.vue'
import SfRadioGroupTile from '../../components/SfRadio/SfRadioGroupTile.vue'

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
  },
  argTypes: {
    name: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: 'radio',
      description: 'Checkbox name'
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
      defaultValue: false,
      description: 'Shows error message value of radio group when true.'
    }
  }

}

const Template = (args, { argTypes }) => ({
  components: { SfRadio },
  props: Object.keys(argTypes),
  template: `
    <SfRadio 
      :name="name"
      :value="value"
      :disabled="disabled"   
      :invalid="invalid"  
      :required="required" 
    />`
})

export const Common = Template.bind({})
Common.args = {
  name: 'radio',
  value: 'store'
}

const RadioRight = (args, { argTypes }) => ({
  components: { SfRadioRight },
  props: Object.keys(argTypes),
  template: `
    <SfRadioRight 
      name="radio-right"
      :value="value"
      :disabled="disabled"   
      :invalid="invalid"  
      :required="required" 
    />`
})
export const Right = RadioRight.bind({})

const RadioTile = (args, { argTypes }) => ({
  components: { SfRadioTile },
  props: Object.keys(argTypes),
  template: `
    <SfRadioTile name="radio-tile" />`
})
export const Tile = RadioTile.bind({})

const RadioMultiline = (args, { argTypes }) => ({
  components: { SfRadioMultiline },
  props: Object.keys(argTypes),
  template: `
    <SfRadioMultiline name="radio-multiline" />`
})

export const Multiline = RadioMultiline .bind({})

const RadioDense = (args, { argTypes }) => ({
  components: { SfRadioDense },
  props: Object.keys(argTypes),
  template: `
    <SfRadioDense name="radio-dense" />`
})

export const Dense = RadioDense.bind({})

const RadioGroup = (args, { argTypes }) => ({
  components: { SfRadioGroup },
  props: Object.keys(argTypes),
  template: `
    <SfRadioGroup />`
})

export const Group = RadioGroup.bind({})

const RadioGroupTile = (args, { argTypes }) => ({
  components: { SfRadioGroupTile },
  props: Object.keys(argTypes),
  template: `
    <SfRadioGroupTile />`
})

export const Group_Tile = RadioGroupTile.bind({})
