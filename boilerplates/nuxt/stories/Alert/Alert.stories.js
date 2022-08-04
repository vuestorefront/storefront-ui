
import AlertBase from '../../components/Alert/AlertBase.vue';

export default {
  title: 'SFUI Components/Alert',
  component: AlertBase,
  parameters: {
    docs: {
      description: {
        component:
          'The alert component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    persistent: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description: 'Persistence of the Alert. Default value is false.'
    },
    icon: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description: 'Visibility of icon.'
    },
    type: {
      control: 'select',
      defaultValue: 'info',
      options: ['info', 'positive', 'warning', 'error'],
      table: {
        category: 'Props'
      },
      description:
        'Type of alert. Changes border, background and color of icon'
    },
    header: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Header of alert'
    },
    description: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Description of alert'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { AlertBase },
  props: Object.keys(argTypes),
  template: `
    <AlertBase 
      :header="header"
      :description="description"
      :icon="icon"
      :persistent="persistent"
      :type="type"
      class="small:w-[22.5rem]"
    />
    `
});

export const Base = Template.bind({});

Base.args = {
  header: 'Header',
  description: 'Informative text'
};
