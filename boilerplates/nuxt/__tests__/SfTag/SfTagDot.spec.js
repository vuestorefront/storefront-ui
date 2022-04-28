import { shallowMount } from '@vue/test-utils'
import SfTagDot from '../../components/SfTag/SfTagDot.vue'
let wrapper

describe('SfTagDot.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfTagDot)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
}) 
