import { shallowMount } from '@vue/test-utils';
import ButtonSecondary from '../../components/Button/Secondary/ButtonSecondary.vue';
let wrapper;

describe('ButtonSecondary.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonSecondary);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
