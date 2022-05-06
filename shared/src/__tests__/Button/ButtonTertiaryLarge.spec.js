import { shallowMount } from '@vue/test-utils'
import ButtonTertiaryLarge from '../../components/Button/Tertiary/ButtonTertiaryLarge.vue'
let wrapper

describe('ButtonTertiaryLarge.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonTertiaryLarge)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
