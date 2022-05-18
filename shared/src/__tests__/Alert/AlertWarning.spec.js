import { shallowMount } from '@vue/test-utils'
import AlertWarning from '../../components/Alert/AlertWarning.vue'
let wrapper

describe('AlertWarning.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(AlertWarning)
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
