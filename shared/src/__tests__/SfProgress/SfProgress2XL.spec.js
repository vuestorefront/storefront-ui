import { shallowMount } from '@vue/test-utils'
import SfProgress2XL from '../../components/SfProgress/SfProgress2XL.vue'

let wrapper

describe('SfProgress2XL.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfProgress2XL)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
