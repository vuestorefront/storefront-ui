import { shallowMount } from '@vue/test-utils'
import SfTagIcon from '../../components/SfTag/SfTagIcon.vue'
let wrapper

describe('SfTagIcon.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfTagIcon)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
}) 
