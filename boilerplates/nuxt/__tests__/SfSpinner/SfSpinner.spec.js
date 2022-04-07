import { shallowMount } from '@vue/test-utils'
import SfSpinner from '../../components/SfSpinner/SfSpinner.vue'
let wrapper

describe('SfButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfSpinner)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
