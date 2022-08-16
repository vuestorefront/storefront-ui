import { shallowMount } from '@vue/test-utils';
import ChipsInput from './ChipsInput.vue';

let wrapper;

describe('ChipsInput.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ChipsInput);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
