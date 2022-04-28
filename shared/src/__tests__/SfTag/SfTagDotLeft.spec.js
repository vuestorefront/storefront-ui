import { shallowMount } from '@vue/test-utils'
import SfTagDotLeft from '../../components/SfTag/SfTagDotLeft.vue'
let wrapper

describe('SfTagDotLeft.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfTagDotLeft)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
}) 
