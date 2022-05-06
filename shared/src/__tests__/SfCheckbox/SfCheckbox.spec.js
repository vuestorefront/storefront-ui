import { shallowMount } from '@vue/test-utils'
import SfCheckbox from '../../components/SfCheckbox/SfCheckbox.vue'

let wrapper

describe('SfCheckbox.vue', () => {
  const name = "checkbox";
  beforeEach(() => {
    wrapper = shallowMount(SfCheckbox, {
      propsData: {
        name
      },
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})