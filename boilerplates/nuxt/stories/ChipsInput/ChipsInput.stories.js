import ChipsInput from '../../components/ChipsInput/ChipsInput.vue';

export default {
  title: 'SFUI Components/ChipsInput',
  component: ChipsInput,
  parameters: {
    docs: {
      description: {
        component:
          'The chips component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    value: {
      control: 'text',
      table: {
        category: 'Props'
      },
      defaultValue: 'Label',
      description: 'Chips value'
    },
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
  components: { ChipsInput },
  props: Object.keys(argTypes),
  template: `
    <ChipsInput :value="value" :size="size" :disabled="disabled">
    <template #icon>
      <svg class="w-full h-full fill-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
      </svg>
    </template>
    </ChipsInput>`
});

export const Base = Template.bind({});
Base.args = {
  size: 'medium'
};
