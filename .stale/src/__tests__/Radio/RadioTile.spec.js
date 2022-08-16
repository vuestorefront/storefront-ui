import { shallowMount } from '@vue/test-utils';
import RadioTile from '../../components/Radio/RadioTile.vue';

let wrapper;

describe('RadioDense.vue', () => {
  const name = 'radio-tile';
  const id = 'radio-5';
  beforeEach(() => {
    wrapper = shallowMount(RadioTile, {
      propsData: {
        name,
        id
      }
    });
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('should emit change event', () => {
    wrapper.vm.changeHandler();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted()['change']).toBeTruthy();
    });
  });
  it('should emit input event', () => {
    wrapper.vm.inputHandler();
    wrapper.vm.$nextTick(() => {
      expect(wrapper.emitted()['input']).toBeTruthy();
    });
  });
  it('should return checked state', () => {
    const value = 'one';
    const selected = 'one';
    wrapper.setProps({ value, selected });
    expect(wrapper.vm.isChecked).toBeTruthy();
  });
});
