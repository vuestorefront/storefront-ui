import { shallowMount } from '@vue/test-utils'
import SfSpinner from '../../components/SfSpinner/SfSpinnerBase.vue'
let wrapper

describe('SfSpinnerBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfSpinner)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})