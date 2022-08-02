import { shallowMount } from '@vue/test-utils';
import ButtonIcons from './ButtonIcons.vue';

let wrapper;

describe('ButtonIcons.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonIcons);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
