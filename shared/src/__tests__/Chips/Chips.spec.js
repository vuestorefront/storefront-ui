import { shallowMount } from '@vue/test-utils';
import ChipsBase from '../../components/Chips/ChipsBase.vue';

let wrapper;

describe('ChipsBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ChipsBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
