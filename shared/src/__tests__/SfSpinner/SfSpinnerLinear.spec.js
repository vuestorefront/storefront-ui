import { shallowMount } from '@vue/test-utils'
import SfSpinnerLinear from '../../components/SfSpinner/SfSpinnerLinear.vue'
let wrapper

describe('SfSpinnerLinear.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfSpinnerLinear)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
