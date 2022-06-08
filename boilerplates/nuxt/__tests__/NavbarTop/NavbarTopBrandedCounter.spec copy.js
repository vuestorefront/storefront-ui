import { shallowMount } from '@vue/test-utils';
import NavbarTopBrandedCounter from '../../components/NavbarTop/NavbarTopBrandedCounter.vue';

let wrapper;

describe('NavbarTopBrandedCounter.vue', () => {
  const name = 'checkbox';
  beforeEach(() => {
    wrapper = shallowMount(NavbarTopBrandedCounter, {
      propsData: {
        name
      }
    });
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
