import { shallowMount } from '@vue/test-utils'
import ButtonPrimaryIcons from '../../components/SfButton/Primary/Icon/ButtonPrimaryIcons.vue'

let wrapper

describe('SfButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimaryIcons)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
