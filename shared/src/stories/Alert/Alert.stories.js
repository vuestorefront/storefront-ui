
import AlertBase from '../../components/Alert/AlertBase.vue';
import AlertSimple from '../../components/Alert/AlertSimple.vue';
import AlertMultiline from '../../components/Alert/AlertMultiline.vue';
import AlertWithButton from '../../components/Alert/AlertWithButton.vue';

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
    type: {
      control: 'select',
      defaultValue: 'info',
      options: ['info', 'positive', 'warning', 'error'],
      table: {
        category: 'Props'
      },
      description:
        'Type of alert. Changes border, background and color of icon'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { AlertBase },
  props: Object.keys(argTypes),
  template: `
    <AlertBase :persistent="persistent" :type="type" />
    `
});

export const Base = Template.bind({});

const SimpleAlert = (args, { argTypes }) => ({
  components: { AlertSimple },
  props: Object.keys(argTypes),
  template: `
  <AlertSimple :type="type" />
  `
});

export const Simple = SimpleAlert.bind({});

const MultilineAlert = (args, { argTypes }) => ({
  components: { AlertMultiline },
  props: Object.keys(argTypes),
  template: `
  <AlertMultiline :type="type" />
  `
});

export const Multiline = MultilineAlert.bind({});

const WithButtonAlert = (args, { argTypes }) => ({
  components: { AlertWithButton },
  props: Object.keys(argTypes),
  template: `
  <AlertWithButton :type="type" />
  `
});

export const WithButton = WithButtonAlert.bind({});
