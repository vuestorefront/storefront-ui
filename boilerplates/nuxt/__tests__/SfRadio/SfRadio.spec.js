import { shallowMount } from '@vue/test-utils'
import SfRadio from '../../components/SfRadio/SfRadio.vue'

let wrapper

describe('SfRadio.vue', () => {
  const name = 'radio'
  beforeEach(() => {
    wrapper = shallowMount(SfRadio, {
      propsData: {
        name
      }
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
