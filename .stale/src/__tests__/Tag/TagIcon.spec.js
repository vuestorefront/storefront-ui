import { shallowMount } from '@vue/test-utils';
import TagIcon from '../../components/Tag/TagIcon.vue';
let wrapper;

describe('TagIcon.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TagIcon);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
