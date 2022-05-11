import { shallowMount } from '@vue/test-utils'
import ProgressBase from '../../components/Progress/ProgressBase.vue'

let wrapper

describe('ProgressBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ProgressBase)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
