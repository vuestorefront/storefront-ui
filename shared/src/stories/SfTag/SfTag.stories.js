
import SfTag from '../../components/SfTag/SfTag.vue';
import SfTagDot from '../../components/SfTag/SfTagDot'
import SfTagDotLeft from '../../components/SfTag/SfTagDotLeft'
import SfTagDotRight from '../../components/SfTag/SfTagDotRight'

export default {
  title: 'SFUI Components/Tag',
  component: SfTag,
  parameters: {
    docs: {
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

const TagDot = (args, { argTypes }) => ({
  components: { SfTagDot },
  template: `
    <SfTagDot />
    `
})

export const Dot = TagDot.bind({})

const TagDotLeft = (args, { argTypes }) => ({
  components: { SfTagDotLeft },
  template: `
    <SfTagDotLeft />
    `
})

export const DotLeft = TagDotLeft.bind({})

const TagDotRight = (args, { argTypes }) => ({
  components: { SfTagDotRight },
  template: `
    <SfTagDotRight />
    `
})

export const DotRight = TagDotRight.bind({})
