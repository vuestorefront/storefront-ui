import { shallowMount } from '@vue/test-utils'
import SfRadioGroupTile from '../../components/SfRadio/SfRadioGroupTile.vue'

let wrapper

describe('SfRadioDense.vue', () => {
  const name = 'radio-group-tile'
  beforeEach(() => {
    wrapper = shallowMount(SfRadioGroupTile, {
      propsData: {
        name
      }
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
