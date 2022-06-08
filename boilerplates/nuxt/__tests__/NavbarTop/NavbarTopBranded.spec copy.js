import { shallowMount } from '@vue/test-utils';
import NavbarTopBranded from '../../components/NavbarTop/NavbarTopBranded.vue';

let wrapper;

describe('NavbarTopBranded.vue', () => {
  const name = 'checkbox';
  beforeEach(() => {
    wrapper = shallowMount(NavbarTopBranded, {
      propsData: {
        name
      }
    });
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
