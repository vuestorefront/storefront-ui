import { shallowMount } from '@vue/test-utils';
import ButtonIconLeft from './ButtonIconLeft.vue';

let wrapper;

describe('ButtonIconLeft.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonIconLeft);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
