import { shallowMount } from '@vue/test-utils';
import Spinner3Xl from '../../components/Spinner/Spinner3Xl.vue';
let wrapper;

describe('Spinner3Xl.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Spinner3Xl);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
