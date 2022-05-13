import { shallowMount } from '@vue/test-utils'
import SpinnerLg from '../../components/Spinner/SpinnerLg.vue'
let wrapper

describe('SpinnerLg.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpinnerLg)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
