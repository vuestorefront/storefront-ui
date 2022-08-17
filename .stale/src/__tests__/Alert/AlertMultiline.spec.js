import { shallowMount } from '@vue/test-utils';
import AlertMultiline from '../../components/Alert/AlertMultiline.vue';
let wrapper;

describe('AlertMultiline.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(AlertMultiline);
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
