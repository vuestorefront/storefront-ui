import { shallowMount } from '@vue/test-utils'
import SfRadioTile from '../../components/SfRadio/SfRadioTile.vue'

let wrapper

describe('SfRadioDense.vue', () => {
  const name = 'radio-tile'
  beforeEach(() => {
    wrapper = shallowMount(SfRadioTile, {
      propsData: {
        name
      }
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
