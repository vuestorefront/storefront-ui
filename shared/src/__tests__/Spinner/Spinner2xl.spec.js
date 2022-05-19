import { shallowMount } from '@vue/test-utils';
import Spinner2Xl from '../../components/Spinner/Spinner2Xl.vue';
let wrapper;

describe('Spinner2Xl2xl.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Spinner2Xl);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
