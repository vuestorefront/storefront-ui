import { shallowMount } from '@vue/test-utils';
import ButtonIconLeft from '../../components/Button/ButtonIconLeft.vue';

let wrapper;

describe('ButtonIconLeft.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonIconLeft);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
