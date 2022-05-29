
import TooltipBase from '../../components/Tooltip/TooltipBase.vue'
import TooltipBottom from '../../components/Tooltip/TooltipBottom'
import TooltipLeft from '../../components/Tooltip/TooltipLeft'
import TooltipRight from '../../components/Tooltip/TooltipRight'

export default {
  title: 'SFUI Components/Tooltip',
  component: TooltipBase,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '300px',
      description: {
        component:
          'The tag component. [link to component docs on the page]'
      }
    }
  }
}

const Template = () => ({
  components: { TooltipBase, TooltipRight },
  template: `
    <TooltipBase class="my-12" />
    `
})

export const Base = Template.bind({})

const TooltipOnBottom = () => ({
  components: { TooltipBottom },
  template: `
    <TooltipBottom class="my-12" />
    `
})

export const Bottom = TooltipOnBottom.bind({})

const TooltipOnLeft = () => ({
  components: { TooltipLeft },
  template: `
    <TooltipLeft class="my-12" />
    `
})

export const Left = TooltipOnLeft.bind({})

const TooltipOnRight = () => ({
  components: { TooltipRight },
  template: `
    <TooltipRight class="my-12" />
    `
})

export const Right = TooltipOnRight.bind({})
