import { shallowMount } from '@vue/test-utils'
import SfTag from '../../components/SfTag/SfTag.vue'
let wrapper

describe('SfTag.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfTag)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
}) 
