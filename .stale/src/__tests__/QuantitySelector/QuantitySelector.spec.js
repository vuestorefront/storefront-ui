import { shallowMount } from '@vue/test-utils';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector.vue';
let wrapper;

describe('QuantitySelector.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(QuantitySelector);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
