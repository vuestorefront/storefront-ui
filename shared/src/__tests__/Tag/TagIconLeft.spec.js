import { shallowMount } from '@vue/test-utils';
import TagIconLeft from '../../components/Tag/TagIconLeft.vue';
let wrapper;

describe('TagIconLeft.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TagIconLeft);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
