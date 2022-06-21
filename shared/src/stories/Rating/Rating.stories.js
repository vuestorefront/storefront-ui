
import RatingBase from '../../components/Rating/RatingBase.vue';
import RatingWithValue from '../../components/Rating/RatingWithValue.vue';

export default {
  title: 'SFUI Components/Rating',
  component: RatingBase,
  parameters: {
    docs: {
      description: {
        component:
          'The rating component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    value: {
      control: 'number',
      table: {
        category: 'Props',
        defaultValue: {
          summary: '0'
        }
      },
      defaultValue: 0,
      description: 'Current reviews value.'
    },
    max: {
      control: 'number',
      table: {
        category: 'Props',
        defaultValue: {
          summary: '5'
        }
      },
      defaultValue: 5,
      description: 'Max value of the review.'
    },
    reviews: {
      control: 'number',
      table: {
        category: 'Props',
        defaultValue: {
          summary: '0'
        }
      },
      defaultValue: 0,
      description: 'Reviews counter.'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { RatingBase },
  props: Object.keys(argTypes),
  template: `
    <RatingBase
      :value="value"
      :max="max"
      :reviews="reviews"
    />
    `
});

export const Base = Template.bind({});

const WithValue = (args, { argTypes }) => ({
  components: { RatingWithValue },
  props: Object.keys(argTypes),
  template: `
    <RatingWithValue 
      :value="value"
      :reviews="reviews"
    />
    `
});

export const WithNumberValue = WithValue.bind({});
