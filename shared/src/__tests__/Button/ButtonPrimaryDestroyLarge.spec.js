import { shallowMount } from '@vue/test-utils';
import ButtonPrimaryDestroyLarge from '../../components/Button/Primary/Destroy/ButtonPrimaryDestroyLarge.vue';

let wrapper;

describe('ButtonPrimaryDestroyLarge.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimaryDestroyLarge);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
