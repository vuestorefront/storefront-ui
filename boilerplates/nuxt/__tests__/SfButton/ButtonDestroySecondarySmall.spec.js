import { shallowMount } from '@vue/test-utils'
import ButtonDestroySecondarySmall from '../../components/SfButton/Secondary/Destroy/ButtonDestroySecondarySmall.vue'

let wrapper

describe('ButtonDestroySecondarySmall.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonDestroySecondarySmall)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
