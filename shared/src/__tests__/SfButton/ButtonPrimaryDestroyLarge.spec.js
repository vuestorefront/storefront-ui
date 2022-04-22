import { shallowMount } from '@vue/test-utils'
import ButtonDestroyLarge from '../../components/SfButton/Primary/Destroy/ButtonDestroyLarge.vue'

let wrapper

describe('ButtonDestroyLarge.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonDestroyLarge)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
