import { shallowMount } from '@vue/test-utils'
import ButtonTertiary from '../../components/SfButton/Tertiary/ButtonTertiary.vue'
let wrapper

describe('ButtonTertiary.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonTertiary)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
