import { shallowMount } from '@vue/test-utils'
import SfProgressLG from '../../components/SfProgress/SfProgressLG.vue'

let wrapper

describe('SfProgressLG.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfProgressLG)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
