import { shallowMount } from '@vue/test-utils';
import AlertSimple from '../../components/Alert/AlertSimple.vue';
let wrapper;

describe('AlertSimple.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(AlertSimple);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should emit close event on close', () => {
    wrapper.vm.close();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted()['close']).toBeTruthy();
    });
  });
});
