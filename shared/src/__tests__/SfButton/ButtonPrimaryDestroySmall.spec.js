import { shallowMount } from '@vue/test-utils'
import ButtonDestroySmall from '../../components/SfButton/Primary/Destroy/ButtonDestroySmall.vue'

let wrapper

describe('ButtonDestroySmall.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonDestroySmall)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
