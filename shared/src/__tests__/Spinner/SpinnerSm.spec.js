import { shallowMount } from '@vue/test-utils'
import SpinnerSm from '../../components/Spinner/SpinnerSm.vue'
let wrapper

describe('SpinnerSm.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SpinnerSm)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
