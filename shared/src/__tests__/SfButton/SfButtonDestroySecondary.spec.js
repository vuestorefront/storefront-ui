import { shallowMount } from '@vue/test-utils'
import SfButtonDestroySecondary from '../../components/SfButton/SfButtonDestroySecondary.vue'

let wrapper

describe('SfButtonDestroySecondary.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfButtonDestroySecondary)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
