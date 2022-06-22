import { shallowMount } from '@vue/test-utils';
import ComboBox from '../../components/ComboBox/ComboBox.vue';
let wrapper;

describe('ComboBox.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ComboBox);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
