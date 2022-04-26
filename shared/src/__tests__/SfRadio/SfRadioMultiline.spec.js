import { shallowMount } from '@vue/test-utils'
import SfRadioMultiline from '../../components/SfRadio/SfRadioMultiline.vue'

let wrapper

describe('SfRadioDense.vue', () => {
  const name = 'radio-multiline'
  beforeEach(() => {
    wrapper = shallowMount(SfRadioMultiline, {
      propsData: {
        name
      }
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
