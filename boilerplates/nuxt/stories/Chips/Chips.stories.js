import ChipsBase from '../../components/Chips/ChipsBase.vue';

export default {
  title: 'SFUI Components/Chips',
  component: ChipsBase,
  parameters: {
    docs: {
      description: {
        component:
          'The checkbox component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    size: {
      control: 'select',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      table: {
        category: 'Props'
      },
      description:
        'Size of chips.'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description: 'Chips disabled property'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { ChipsBase },
  props: Object.keys(argTypes),
  template: `
    <ChipsBase :size="size" :disabled="disabled">
    <svg class="w-5 mr-1 fill-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg>
    Text
    </ChipsBase>`
});

export const Base = Template.bind({});
Base.args = {
  size: 'medium'
};
