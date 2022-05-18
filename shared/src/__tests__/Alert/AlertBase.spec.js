import { shallowMount } from '@vue/test-utils'
import AlertBase from '../../components/Alert/AlertBase.vue'

let wrapper

describe('AlertBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(AlertBase)
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
