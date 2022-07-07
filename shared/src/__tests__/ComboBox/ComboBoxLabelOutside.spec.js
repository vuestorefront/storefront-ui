import { shallowMount } from '@vue/test-utils';
import ComboBoxLabelOutside from '../../components/ComboBox/ComboBoxLabelOutside.vue';
let wrapper;

describe('ComboBoxLabelOutside.vue', () => {
  const filteredOptions = [
    'red',
    'red-orange',
    'orange',
    'yellow',
    'yellow-green',
    'green',
    'sky blue',
    'blue',
    'violet',
    'brown',
    'black',
    'white',
    'gray',
    'magenta',
    'pink',
    'light-blue',
    'aqua-green',
    'jade-green',
    'peach',
    'golden-yellow',
    'yellow-orange',
    'mahogany',
    'tan',
    'light brown'
  ];
  beforeEach(() => {
    wrapper = shallowMount(ComboBoxLabelOutside, {
      propsData: {
        filteredOptions
      }
    });
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
