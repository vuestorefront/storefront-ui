import { shallowMount } from '@vue/test-utils';
import ProductCardWithButton from './ProductCardWithButton.vue';

let wrapper;

describe('ProductCardWithButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ProductCardWithButton);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
