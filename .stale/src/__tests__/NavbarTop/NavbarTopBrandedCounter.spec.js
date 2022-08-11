import { shallowMount } from '@vue/test-utils';
import NavbarTopBrandedCounter from '../../components/NavbarTop/NavbarTopBrandedCounter.vue';

let wrapper;

describe('NavbarTopBrandedCounter.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(NavbarTopBrandedCounter);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
