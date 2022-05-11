import { shallowMount } from '@vue/test-utils'
import SfProgressSM from '../../components/SfProgress/SfProgressSM.vue'

let wrapper

describe('SfProgressSM.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfProgressSM)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
