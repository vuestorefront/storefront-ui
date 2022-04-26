import { shallowMount } from '@vue/test-utils'
import SfRadioGroup from '../../components/SfRadio/SfRadioGroup.vue'

let wrapper

describe('SfRadioDense.vue', () => {
  const name = 'radio-group'
  beforeEach(() => {
    wrapper = shallowMount(SfRadioGroup, {
      propsData: {
        name
      }
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
