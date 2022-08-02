import RatingButton from './RatingButton.vue';

export default {
  title: 'SFUI Components/RatingButton',
  component: RatingButton,
  parameters: {
    docs: {
      description: {
        component:
          'The rating button component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    max: {
      control: 'number',
      table: {
        category: 'Props',
        defaultValue: {
          summary: '5'
        }
      },
      defaultValue: 5,
      description: 'Amount of rating stars.'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { RatingButton },
  props: Object.keys(argTypes),
  template: `
      <RatingButton
        :max="max"
      />
    `
});

export const Base = Template.bind({});
