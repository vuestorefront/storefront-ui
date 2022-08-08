import { shallowMount } from '@vue/test-utils';
import TooltipRight from './TooltipRight.vue';

let wrapper;

describe('TooltipRight.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TooltipRight);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
