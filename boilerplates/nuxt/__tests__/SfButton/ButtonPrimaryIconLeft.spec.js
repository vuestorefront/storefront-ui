import { shallowMount } from '@vue/test-utils'
import ButtonPrimaryIconLeft from '../../components/SfButton/Primary/Icon/ButtonPrimaryIconLeft.vue'

let wrapper

describe('SfButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimaryIconLeft)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
