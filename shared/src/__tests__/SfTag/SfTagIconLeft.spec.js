import { shallowMount } from '@vue/test-utils'
import SfTagIconLeft from '../../components/SfTag/SfTagIconLeft.vue'
let wrapper

describe('SfTagIconLeft.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfTagIconLeft)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
}) 
