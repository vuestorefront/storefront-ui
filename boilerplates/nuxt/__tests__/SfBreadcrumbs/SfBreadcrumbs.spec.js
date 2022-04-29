import { shallowMount } from '@vue/test-utils'
import SfBreadcrumbs from '../../components/SfBreadcrumbs/SfBreadcrumbs.vue'
let wrapper

describe('SfBreadcrumbs.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfBreadcrumbs)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
}) 
