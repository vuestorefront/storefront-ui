import { shallowMount } from '@vue/test-utils';
import TooltipBase from './TooltipBase.vue';

let wrapper;

describe('TooltipBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TooltipBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
