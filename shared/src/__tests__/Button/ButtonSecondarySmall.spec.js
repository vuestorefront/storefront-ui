import { shallowMount } from '@vue/test-utils';
import ButtonSecondarySmall from '../../components/Button/Secondary/ButtonSecondarySmall.vue';
let wrapper;

describe('ButtonSecondarySmall.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonSecondarySmall);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
