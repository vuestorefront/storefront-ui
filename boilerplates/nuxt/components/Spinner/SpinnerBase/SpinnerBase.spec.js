import { shallowMount } from '@vue/test-utils';
import SpinnerBase from './SpinnerBase.vue';
let wrapper;

describe('SpinnerBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpinnerBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
