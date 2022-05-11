import { shallowMount } from '@vue/test-utils'
import SfProgressBase from '../../components/SfProgress/SfProgressBase.vue'

let wrapper

describe('SfProgressBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfProgressBase)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
