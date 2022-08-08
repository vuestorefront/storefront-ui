import { shallowMount } from '@vue/test-utils';
import SheetBase from './SheetBase.vue';

let wrapper;

describe('SheetBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SheetBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
