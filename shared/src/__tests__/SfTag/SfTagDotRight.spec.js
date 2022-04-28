import { shallowMount } from '@vue/test-utils'
import SfTagDotRight from '../../components/SfTag/SfTagDotRight.vue'
let wrapper

describe('SfTagDotRight.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfTagDotRight)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
}) 
