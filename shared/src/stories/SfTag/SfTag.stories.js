
import SfTag from '../../components/SfTag/SfTag'
import SfTagIcon from '../../components/SfTag/SfTagIcon'
import SfTagIconLeft from '../../components/SfTag/SfTagIconLeft'
import SfTagIconRight from '../../components/SfTag/SfTagIconRight'

export default {
  title: 'SFUI Components/Tag',
  component: SfTag,
  parameters: {    
    docs: {
      inlineStories: false,
      iframeHeight: '100px',
      description: {
        component:
          'The tag component. [link to component docs on the page]',
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { SfTag },
  template: `
    <SfTag />
    `
})

export const Common = Template.bind({})

const TagIcon = (args, { argTypes }) => ({
  components: { SfTagIcon },
  template: `
    <SfTagIcon />
    `
})

export const Icon = TagIcon.bind({})

const TagIconLeft = (args, { argTypes }) => ({
  components: { SfTagIconLeft },
  template: `
    <SfTagIconLeft />
    `
})

export const IconLeft = TagIconLeft.bind({})

const TagIconRight = (args, { argTypes }) => ({
  components: { SfTagIconRight },
  template: `
    <SfTagIconRight />
    `
})

export const IconRight = TagIconRight.bind({})
