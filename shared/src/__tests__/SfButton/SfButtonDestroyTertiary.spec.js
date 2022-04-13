import { shallowMount } from '@vue/test-utils'
import SfButtonDestroyTertiary from '../../components/SfButton/SfButtonDestroyTertiary.vue'

let wrapper

describe('SfButtonDestroyTertiary.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfButtonDestroyTertiary)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
