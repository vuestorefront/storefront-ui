import { shallowMount } from '@vue/test-utils'
import SpinnerBase from '../../components/Spinner/SpinnerBase.vue'
let wrapper

describe('SpinnerBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpinnerBase)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})