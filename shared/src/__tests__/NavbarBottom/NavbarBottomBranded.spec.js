import { shallowMount } from '@vue/test-utils'
import NavbarBottomBranded from '../../components/NavbarBottom/NavbarBottomBranded.vue'

let wrapper

describe('NavbarBottomBranded.vue', () => {
  const name = "checkbox";
  beforeEach(() => {
    wrapper = shallowMount(NavbarBottomBranded, {
      propsData: {
        name
      },
    })
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})