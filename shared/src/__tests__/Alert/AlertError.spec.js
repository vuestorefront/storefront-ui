import { shallowMount } from '@vue/test-utils';
import AlertError from '../../components/Alert/AlertError.vue';
let wrapper;

describe('AlertError.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(AlertError);
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

