import { shallowMount } from '@vue/test-utils';
import ButtonDestroyTertiarySmall from '../../components/Button/Tertiary/Destroy/ButtonTertiaryDestroySmall.vue';

let wrapper;

describe('ButtonDestroyTertiarySmall.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonDestroyTertiarySmall);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
