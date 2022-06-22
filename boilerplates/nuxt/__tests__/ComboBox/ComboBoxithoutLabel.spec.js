import { shallowMount } from '@vue/test-utils';
import ComboBoxWithoutLabel from '../../components/ComboBox/ComboBoxWithoutLabel.vue';
let wrapper;

describe('ComboBoxWithoutLabel.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ComboBoxWithoutLabel);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
