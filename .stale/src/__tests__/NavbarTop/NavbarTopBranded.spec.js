import { shallowMount } from '@vue/test-utils';
import NavbarTopBranded from '../../components/NavbarTop/NavbarTopBranded.vue';

let wrapper;

describe('NavbarTopBranded.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(NavbarTopBranded);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
