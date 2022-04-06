import { shallowMount } from '@vue/test-utils'
import SfDivider from '../../components/SfDivider/SfDivider.vue'
let wrapper

describe('SfDivider.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfDivider)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
}) 
