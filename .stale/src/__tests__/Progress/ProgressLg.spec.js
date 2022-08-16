import { shallowMount } from '@vue/test-utils';
import ProgressLg from '../../components/Progress/ProgressLg.vue';

let wrapper;

describe('ProgressLg.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ProgressLg);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
