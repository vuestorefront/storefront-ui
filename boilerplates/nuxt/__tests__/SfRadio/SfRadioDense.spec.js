import { shallowMount } from '@vue/test-utils'
import SfRadioDense from '../../components/SfRadio/SfRadioDense.vue'

let wrapper

describe('SfRadioDense.vue', () => {
  const name = 'radio-dense'
  beforeEach(() => {
    wrapper = shallowMount(SfRadioDense, {
      propsData: {
        name
      }
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
