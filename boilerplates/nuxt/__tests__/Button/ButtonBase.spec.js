import { shallowMount } from '@vue/test-utils';
import ButtonBase from '../../components/Button/ButtonBase.vue';

let wrapper;

describe('ButtonBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
