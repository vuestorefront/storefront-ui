import { shallowMount } from '@vue/test-utils'
import SfSpinner from '../../components/SfSpinner/SfSpinner3xl.vue'
let wrapper

describe('SfSpinner3xl.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfSpinner)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})