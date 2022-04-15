import { shallowMount } from '@vue/test-utils'
import SfButtonTertiary from '../../components/SfButton/SfButtonTertiary.vue'
let wrapper

describe('SfButtonTertiary.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfButtonTertiary)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
