import { shallowMount } from '@vue/test-utils'
import SfSpinner from '../../components/SfSpinner/SfSpinner.vue'
import SfSpinnerLinear from '../../components/SfSpinner/SfSpinnerLinear.vue'
let wrapper

describe('SfSpinner.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfSpinner)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
describe('SfSpinnerLinear.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfSpinnerLinear)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
