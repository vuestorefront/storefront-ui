import { shallowMount } from '@vue/test-utils'
import SfButtonDestroy from '../../components/SfButton/SfButtonDestroy.vue'

let wrapper

describe('SfButtonDestroy.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfButtonDestroy)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
