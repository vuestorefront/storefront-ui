import { shallowMount } from '@vue/test-utils'
import SfRadioRight from '../../components/SfRadio/SfRadiRight.vue'

let wrapper

describe('SfRadioRight.vue', () => {
  const name = 'radio'
  beforeEach(() => {
    wrapper = shallowMount(SfRadioRight, {
      propsData: {
        name
      }
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
