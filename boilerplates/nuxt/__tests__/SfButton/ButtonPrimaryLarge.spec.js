import { shallowMount } from '@vue/test-utils'
import ButtonPrimaryLarge from '../../components/SfButton/Primary/ButtonPrimaryLarge.vue'

let wrapper

describe('SfButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimaryLarge)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
