import { shallowMount } from '@vue/test-utils'
import CheckboxBase from '../../components/Checkbox/CheckboxBase.vue'

let wrapper

describe('CheckboxBase.vue', () => {
  const name = "checkbox";
  beforeEach(() => {
    wrapper = shallowMount(CheckboxBase, {
      propsData: {
        name
      },
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})