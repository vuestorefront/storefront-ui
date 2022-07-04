import SpinnerBase from '../../components/Spinner/SpinnerBase.vue';
import SpinnerLinear from '../../components/Spinner/SpinnerLinear.vue';

export default {
  title: 'SFUI Components/Spinner',
  component: SpinnerBase,
  parameters: {
    docs: {
      description: {
        component:
          'The component to show users that loading is underway of content. [link to component docs on the page]'
      }
    },
    argTypes: {
      size: {
        control: 'select',
        defaultValue: 'medium',
        options: ['sm', 'base', 'lg', 'xl', '2xl', '3xl'],
        table: {
          category: 'Props'
        },
        description:
          'Size of spinner. Changes border size, width and height of component'
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: {
    SpinnerBase
  },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SpinnerBase size="sm" class="mb-2" />
    <SpinnerBase :size="size" class="mb-2" /> 
    <SpinnerBase size="lg" class="mb-2" />
    <SpinnerBase size="xl" class="mb-2" />
    <SpinnerBase size="2xl" class="mb-4" />
    <SpinnerBase size="3xl" />
  </div>`
});

export const Base = Template.bind({});

Base.args = {
  size: 'base'
};

const Linear = (args, { argTypes }) => ({
  components: { SpinnerLinear },
  props: Object.keys(argTypes),
  template: '<SpinnerLinear />'
});

export const LinearSpinner = Linear.bind({});
