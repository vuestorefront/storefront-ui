import { shallowMount } from '@vue/test-utils';
import ProgressSm from './ProgressSm.vue';

let wrapper;

describe('ProgressSm.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ProgressSm);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
