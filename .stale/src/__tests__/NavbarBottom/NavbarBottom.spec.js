import { shallowMount } from '@vue/test-utils';
import NavbarBottom from '../../components/NavbarBottom/NavbarBottom.vue';

let wrapper;

describe('NavbarBottom.vue', () => {
  const name = 'checkbox';
  beforeEach(() => {
    wrapper = shallowMount(NavbarBottom, {
      propsData: {
        name
      }
    });
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
