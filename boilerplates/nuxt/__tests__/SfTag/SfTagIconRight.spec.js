import { shallowMount } from '@vue/test-utils'
import SfTagIconRight from '../../components/SfTag/SfTagIconRight.vue'
let wrapper

describe('SfTagIconRight.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfTagIconRight)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
}) 
