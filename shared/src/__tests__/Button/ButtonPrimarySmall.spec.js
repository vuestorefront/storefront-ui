import { shallowMount } from '@vue/test-utils'
import ButtonPrimarySmall from '../../components/Button/Primary/ButtonPrimarySmall.vue'

let wrapper

describe('SfButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimarySmall)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
