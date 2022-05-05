import { shallowMount } from '@vue/test-utils'
import SfSpinner from '../../components/SfSpinner/SfSpinner2xl.vue'
let wrapper

describe('SfSpinner2xl.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfSpinner)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
