import { shallowMount } from '@vue/test-utils'
import SfSpinner from '../../components/SfSpinner/SfSpinnerXl.vue'
let wrapper

describe('SfSpinnerXl.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfSpinner)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
