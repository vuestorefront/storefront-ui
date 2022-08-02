import { shallowMount } from '@vue/test-utils';
import ProductCard from '../../components/ProductCard/ProductCard.vue';

let wrapper;

describe('ProductCard.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ProductCard);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
