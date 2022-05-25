import { shallowMount } from '@vue/test-utils';
import Progress3Xl from '../../components/Progress/Progress3Xl.vue';

let wrapper;

describe('Progress3Xl.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Progress3Xl);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
