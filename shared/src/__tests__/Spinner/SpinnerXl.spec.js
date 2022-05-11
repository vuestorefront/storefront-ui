import { shallowMount } from '@vue/test-utils'
import SpinnerXl from '../../components/Spinner/SpinnerXl.vue'
let wrapper

describe('SpinnerXl.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpinnerXl)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
