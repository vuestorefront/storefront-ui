import { shallowMount } from '@vue/test-utils';
import RatingBase from '../../components/Rating/RatingBase.vue';
import RatingWithValue from '../../components/Rating/RatingWithValue.vue';

let wrapper;

describe('RatingBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(RatingBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe('RatingWithValue.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(RatingWithValue);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
