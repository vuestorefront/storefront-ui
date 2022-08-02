import { shallowMount } from '@vue/test-utils';
import ProgressLg from './ProgressLg.vue';

let wrapper;

describe('ProgressLg.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ProgressLg);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
