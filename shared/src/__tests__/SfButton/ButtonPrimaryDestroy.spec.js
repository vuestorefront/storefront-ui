import { shallowMount } from '@vue/test-utils'
import ButtonDestroy from '../../components/SfButton/Primary/Destroy/ButtonDestroy.vue'

let wrapper

describe('ButtonDestroy.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonDestroy)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
