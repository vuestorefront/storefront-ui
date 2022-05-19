import { shallowMount } from '@vue/test-utils';
import ButtonPrimaryIconLeft from '../../components/Button/Primary/Icon/ButtonPrimaryIconLeft.vue';

let wrapper;

describe('ButtonPrimaryIconLeft.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimaryIconLeft);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
