
import TooltipBase from './TooltipBase/TooltipBase.vue';
import TooltipBottom from './TooltipBottom/TooltipBottom.vue';
import TooltipLeft from './TooltipLeft/TooltipLeft.vue';
import TooltipRight from './TooltipRight/TooltipRight.vue';

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
  },
  argTypes: {
    label: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: '',
      description: 'Tooltip label'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { TooltipBase, TooltipRight },
  props: Object.keys(argTypes),
  template: `
    <TooltipBase class="my-12" :label="label" />
    `
});

export const Base = Template.bind({});

Base.args = {
  label: 'Label text'
};

const TooltipOnBottom = (args, { argTypes }) => ({
  components: { TooltipBottom },
  props: Object.keys(argTypes),
  template: `
    <TooltipBottom class="my-12" :label="label" />
    `
});

export const Bottom = TooltipOnBottom.bind({});

const TooltipOnLeft = (args, { argTypes }) => ({
  components: { TooltipLeft },
  props: Object.keys(argTypes),
  template: `
    <TooltipLeft class="my-12" :label="label" />
    `
});

export const Left = TooltipOnLeft.bind({});

const TooltipOnRight = (args, { argTypes }) => ({
  components: { TooltipRight },
  props: Object.keys(argTypes),
  template: `
    <TooltipRight class="my-12" :label="label" />
    `
});

export const Right = TooltipOnRight.bind({});
