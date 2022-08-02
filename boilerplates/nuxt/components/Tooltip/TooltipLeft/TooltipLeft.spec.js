import { shallowMount } from '@vue/test-utils';
import TooltipLeft from './TooltipLeft.vue';
let wrapper;

describe('TooltipLeft.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TooltipLeft);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
