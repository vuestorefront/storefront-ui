import { shallowMount } from '@vue/test-utils'
import ButtonTertiarySmall from '../../components/Button/Tertiary/ButtonTertiarySmall.vue'
let wrapper

describe('ButtonTertiarySmall.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonTertiarySmall)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
