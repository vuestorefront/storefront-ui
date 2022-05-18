import { shallowMount } from '@vue/test-utils'
import AlertPositive from '../../components/Alert/AlertPositive.vue'
let wrapper

describe('AlertPositive.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(AlertPositive)
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
