import { shallowMount } from '@vue/test-utils';
import TooltipBottom from '../../components/Tooltip/TooltipBottom.vue';
let wrapper;

describe('TooltipBottom.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TooltipBottom);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
