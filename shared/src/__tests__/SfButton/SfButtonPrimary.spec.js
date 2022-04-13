import { shallowMount } from '@vue/test-utils'
import SfButtonPrimary from '../../components/SfButton/SfButtonPrimary.vue'

let wrapper

describe('SfButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfButtonPrimary)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
