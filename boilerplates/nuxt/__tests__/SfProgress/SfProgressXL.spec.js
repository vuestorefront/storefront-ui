import { shallowMount } from '@vue/test-utils'
import SfProgressXL from '../../components/SfProgress/SfProgressXL.vue'

let wrapper

describe('SfProgressXL.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfProgressXL)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
