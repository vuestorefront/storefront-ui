import { shallowMount } from '@vue/test-utils';
import NavbarTop from '../../components/NavbarTop/NavbarTop.vue';

let wrapper;

describe('NavbarTop.vue', () => {
  const name = 'checkbox';
  beforeEach(() => {
    wrapper = shallowMount(NavbarTop, {
      propsData: {
        name
      }
    });
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
