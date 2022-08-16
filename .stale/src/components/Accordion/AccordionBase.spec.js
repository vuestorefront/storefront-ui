import { shallowMount } from '@vue/test-utils';
import AccordionBase from './AccordionBase.vue';

let wrapper;

describe('AccordionBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(AccordionBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
