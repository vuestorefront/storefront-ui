import { shallowMount } from '@vue/test-utils'
import SfProgressLinear from '../../components/SfProgress/SfProgressLinear.vue'

let wrapper

describe('SfProgressLinear.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfProgressLinear)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
