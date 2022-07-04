import { shallowMount } from '@vue/test-utils';
import AccordionBase from '../../components/Accordion/AccordionBase.vue';
let wrapper;

describe('AccordionBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(AccordionBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
