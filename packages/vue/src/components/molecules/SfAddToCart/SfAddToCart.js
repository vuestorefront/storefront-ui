import SfButton from '../../atoms/SfButton/SfButton.vue';
import SfSelect from '../SfSelect/SfSelect.vue';

export default {
  name: "SfAddToCart",
  components: {
    SfButton,
    SfSelect
  },
  props: {
    /**
     * Quantity to add
     */
    quantity: {
      type: String,
      default: "1"
    }
  }
};
