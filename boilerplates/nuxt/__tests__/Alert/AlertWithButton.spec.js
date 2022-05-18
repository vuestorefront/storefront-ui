import { shallowMount } from '@vue/test-utils'
import AlertWithButton from '../../components/Alert/AlertWithButton.vue'

let wrapper

describe('AlertWithButton.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(AlertWithButton)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should emit close event on close', () => {
    wrapper.vm.close()
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted()['close']).toBeTruthy()
    })
  })
})
