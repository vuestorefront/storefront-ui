import { shallowMount } from '@vue/test-utils'
import ProgressLinear from '../../components/Progress/ProgressLinear.vue'

let wrapper

describe('ProgressLinear.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ProgressLinear)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
