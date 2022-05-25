import { shallowMount } from '@vue/test-utils';
import ButtonDestroySecondaryLarge from '../../components/Button/Secondary/Destroy/ButtonSecondaryDestroyLarge.vue';

let wrapper;

describe('ButtonDestroySecondaryLarge.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonDestroySecondaryLarge);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
