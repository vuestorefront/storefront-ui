import { shallowMount } from '@vue/test-utils'
import SfProgress3XL from '../../components/SfProgress/SfProgress3XL.vue'

let wrapper

describe('SfProgress3XL.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfProgress3XL)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
