import { shallowMount } from '@vue/test-utils';
import TagBadge from '../../components/Tag/TagBadge.vue';
let wrapper;

describe('TagBadge.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TagBadge);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
