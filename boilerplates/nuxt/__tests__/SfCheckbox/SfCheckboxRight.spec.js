import { shallowMount } from '@vue/test-utils'
import SfCheckboxRight from '../../components/SfCheckbox/SfCheckboxRight.vue'

let wrapper

describe('SfCheckboxRight.vue', () => {
  const name = "checkbox";
  beforeEach(() => {
    wrapper = shallowMount(SfCheckboxRight, {
      propsData: {
        name
      }
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})