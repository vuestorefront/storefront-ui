import { shallowMount } from '@vue/test-utils';
import TagBase from '../../components/Tag/TagBase.vue';
let wrapper;

describe('TagBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TagBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
