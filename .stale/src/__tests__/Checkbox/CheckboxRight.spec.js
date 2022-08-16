import { shallowMount } from '@vue/test-utils';
import CheckboxRight from '../../components/Checkbox/CheckboxRight.vue';

let wrapper;

describe('CheckboxRight.vue', () => {
  const name = 'checkbox';
  beforeEach(() => {
    wrapper = shallowMount(CheckboxRight, {
      propsData: {
        name
      }
    });
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
