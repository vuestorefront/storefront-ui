import { shallowMount } from '@vue/test-utils'
import ButtonTertiaryLarge from '../../components/SfButton/Tertiary/ButtonTertiaryLarge.vue'
let wrapper

describe('ButtonTertiaryLarge.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonTertiaryLarge)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
