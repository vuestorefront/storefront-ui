import { shallowMount } from '@vue/test-utils';
import ButtonPrimaryLarge from '../../components/Button/Primary/ButtonPrimaryLarge.vue';

let wrapper;

describe('ButtonPrimaryLarge.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimaryLarge);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
