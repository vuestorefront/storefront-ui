import { shallowMount } from '@vue/test-utils'
import SfButtonSecondary from '../../components/SfButton/SfButtonSecondary.vue'
let wrapper

describe('SfButtonSecondary.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfButtonSecondary)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
