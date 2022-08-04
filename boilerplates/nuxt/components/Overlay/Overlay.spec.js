import { shallowMount } from '@vue/test-utils';
import OverlayBase from './OverlayBase.vue';
let wrapper;

describe('OverlayBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(OverlayBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
