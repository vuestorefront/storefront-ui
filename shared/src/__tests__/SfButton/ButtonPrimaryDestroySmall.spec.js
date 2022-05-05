import { shallowMount } from '@vue/test-utils'
import ButtonPrimaryDestroySmall from '../../components/SfButton/Primary/Destroy/ButtonPrimaryDestroySmall.vue'

let wrapper

describe('ButtonPrimaryDestroySmall.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonPrimaryDestroySmall)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
