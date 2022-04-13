import { shallowMount } from '@vue/test-utils'
import SfButtonRounded from '../../components/SfButton/SfButtonRounded.vue'

let wrapper

describe('SfButtonRounded.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfButtonRounded)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
