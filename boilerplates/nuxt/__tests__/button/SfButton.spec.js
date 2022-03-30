import { shallowMount } from '@vue/test-utils'
import SfButton from './../../components/SfButton'
let wrapper

describe('SfButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(SfButton)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders component with defaults', () => {
    expect(wrapper.classes('sf-button')).toBe(true)
  })
})
