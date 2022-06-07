import { shallowMount } from '@vue/test-utils';
import BreadcrumbsWithIcon from '../../components/Breadcrumbs/BreadcrumbsWithIcon.vue';
let wrapper;

describe('BreadcrumbsWithIcon.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(BreadcrumbsWithIcon);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
