
import RatingBase from './RatingBase/RatingBase.vue';
import RatingWithValue from './RatingWithValue/RatingWithValue.vue';

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
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
      defaultValue: 'base',
      table: {
        category: 'Props',
        defaultValue: {
          summary: 'base'
        }
      },
      description: 'Change size of the component'
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
      :size="size"
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
      :size="size"
    />
    `
});

export const WithNumberValue = WithValue.bind({});
