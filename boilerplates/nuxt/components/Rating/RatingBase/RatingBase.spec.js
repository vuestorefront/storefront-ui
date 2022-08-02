import { shallowMount } from '@vue/test-utils';
import RatingBase from './RatingBase.vue';

let wrapper;

describe('RatingBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(RatingBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
