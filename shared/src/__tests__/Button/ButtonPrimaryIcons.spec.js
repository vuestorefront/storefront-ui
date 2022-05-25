import { shallowMount } from '@vue/test-utils';
import ButtonPrimaryIcons from '../../components/Button/Primary/Icon/ButtonPrimaryIcons.vue';

let wrapper;

describe('ButtonPrimaryIcons.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimaryIcons);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
