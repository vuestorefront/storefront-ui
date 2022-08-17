import { shallowMount } from '@vue/test-utils';
import SpinnerLinear from './SpinnerLinear.vue';

let wrapper;

describe('SpinnerLinear.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpinnerLinear);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
