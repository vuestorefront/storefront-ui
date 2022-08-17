import { shallowMount } from '@vue/test-utils';
import ButtonIconRight from './ButtonIconRight.vue';

let wrapper;

describe('ButtonIconRight.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonIconRight);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
