
import AlertBase from '../../components/Alert/AlertBase.vue';
import AlertSimple from '../../components/Alert/AlertSimple.vue';
import AlertMultiline from '../../components/Alert/AlertMultiline.vue';
import AlertPositive from '../../components/Alert/AlertPositive.vue';
import AlertWarning from '../../components/Alert/AlertWarning.vue';
import AlertError from '../../components/Alert/AlertError.vue';
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
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { AlertBase },
  props: Object.keys(argTypes),
  template: `
    <AlertBase :persistent="persistent" />
    `
});

export const Common = Template.bind({});

const PositiveAlert = (args, { argTypes }) => ({
  components: { AlertPositive },
  props: Object.keys(argTypes),
  template: `
  <AlertPositive />
  `
});

export const Positive = PositiveAlert.bind({});

const SimpleAlert = (args, { argTypes }) => ({
  components: { AlertSimple },
  props: Object.keys(argTypes),
  template: `
  <AlertSimple />
  `
});

export const Simple = SimpleAlert.bind({});

const WarningAlert = (args, { argTypes }) => ({
  components: { AlertWarning },
  props: Object.keys(argTypes),
  template: `
  <AlertWarning />
  `
});

export const Warning = WarningAlert.bind({});


const ErrorAlert = (args, { argTypes }) => ({
  components: { AlertError },
  props: Object.keys(argTypes),
  template: `
  <AlertError />
  `
});

export const Error = ErrorAlert.bind({});

const MultilineAlert = (args, { argTypes }) => ({
  components: { AlertMultiline },
  props: Object.keys(argTypes),
  template: `
  <AlertMultiline />
  `
});

export const Multiline = MultilineAlert.bind({});

const Alert_With_Button = (args, { argTypes }) => ({
  components: { AlertWithButton },
  props: Object.keys(argTypes),
  template: `
  <AlertWithButton />
  `
});

export const WithButton = Alert_With_Button.bind({});

