import { shallowMount } from '@vue/test-utils';
import ButtonPrimary from '../../components/Button/Primary/ButtonPrimary.vue';

let wrapper;

describe('ButtonPrimary.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimary);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
