import { shallowMount } from '@vue/test-utils';
import ButtonDestroyTertiary from '../../components/Button/Tertiary/Destroy/ButtonTertiaryDestroy.vue';

let wrapper;

describe('ButtonDestroyTertiary.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonDestroyTertiary);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
