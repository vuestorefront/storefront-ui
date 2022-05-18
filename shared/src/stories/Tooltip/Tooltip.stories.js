
import Tooltip from '../../components/Tooltip/Tooltip.vue'
import TooltipBottom from '../../components/Tooltip/TooltipBottom'
import TooltipLeft from '../../components/Tooltip/TooltipLeft'
import TooltipRight from '../../components/Tooltip/TooltipRight'

export default {
  title: 'SFUI Components/Tooltip',
  component: Tooltip,
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
  components: { Tooltip },
  template: `
    <Tooltip class="my-12"/>
    `
})

export const Common = Template.bind({})

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
