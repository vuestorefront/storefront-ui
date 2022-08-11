import { shallowMount } from '@vue/test-utils';
import BreadcrumbsBase from '../../components/Breadcrumbs/BreadcrumbsBase.vue';
let wrapper;

describe('BreadcrumbsBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(BreadcrumbsBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
