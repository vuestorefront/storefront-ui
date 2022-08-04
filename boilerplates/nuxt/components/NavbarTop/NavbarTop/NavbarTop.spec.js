import { shallowMount } from '@vue/test-utils';
import NavbarTop from './NavbarTop.vue';

let wrapper;

describe('NavbarTop.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(NavbarTop);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
