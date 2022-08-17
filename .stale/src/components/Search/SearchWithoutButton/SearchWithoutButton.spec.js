import { shallowMount } from '@vue/test-utils';
import SearchWithoutButton from './SearchWithoutButton.vue';

let wrapper;

describe('SearchWithoutButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SearchWithoutButton);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
