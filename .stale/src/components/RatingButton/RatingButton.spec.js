import { shallowMount } from '@vue/test-utils';
import RatingButton from './RatingButton.vue';

let wrapper;

describe('RatingButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(RatingButton);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
