import { shallowMount } from '@vue/test-utils'
import ButtonTertiaryDestroyLarge from '../../components/SfButton/Tertiary/Destroy/ButtonTertiaryDestroyLarge.vue'

let wrapper

describe('ButtonTertiaryDestroyLarge.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonTertiaryDestroyLarge)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
