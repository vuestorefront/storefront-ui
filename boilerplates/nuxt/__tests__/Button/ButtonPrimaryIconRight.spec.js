import { shallowMount } from '@vue/test-utils'
import ButtonPrimaryIconRight from '../../components/Button/Primary/Icon/ButtonPrimaryIconRight.vue'

let wrapper

describe('SfButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimaryIconRight)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
