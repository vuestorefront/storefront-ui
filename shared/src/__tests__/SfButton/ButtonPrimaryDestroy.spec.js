import { shallowMount } from '@vue/test-utils'
import ButtonPrimaryDestroy from '../../components/SfButton/Primary/Destroy/ButtonPrimaryDestroy.vue'

let wrapper

describe('ButtonPrimaryDestroy.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimaryDestroy)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
