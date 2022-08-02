import { shallowMount } from '@vue/test-utils';
import SelectBase from './SelectBase.vue';
let wrapper;

describe('SelectBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SelectBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
