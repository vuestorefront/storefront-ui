import { shallowMount } from '@vue/test-utils';
import TooltipLeft from '../../components/Tooltip/TooltipLeft.vue';
let wrapper;

describe('TooltipLeft.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TooltipLeft);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
