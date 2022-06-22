import { shallowMount } from '@vue/test-utils';
import ComboBoxLabelOutside from '../../components/ComboBox/ComboBoxLabelOutside.vue';
let wrapper;

describe('ComboBoxLabelOutside.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ComboBoxLabelOutside);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
