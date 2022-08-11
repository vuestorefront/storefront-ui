import { shallowMount } from '@vue/test-utils';
import Progress2Xl from '../../components/Progress/Progress2Xl.vue';

let wrapper;

describe('Progress2Xl.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Progress2Xl);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
