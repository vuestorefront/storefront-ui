import { shallowMount } from '@vue/test-utils';
import RatingWithValue from './RatingWithValue.vue';

let wrapper;

describe('RatingWithValue.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(RatingWithValue);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
