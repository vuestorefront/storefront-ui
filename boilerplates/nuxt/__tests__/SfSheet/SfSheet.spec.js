import { shallowMount } from '@vue/test-utils'
import SfSheet from '../../components/SfSheet/SfSheet.vue'
let wrapper

describe('SfSheet.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfSheet)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
}) 
